import s from './DecksList.module.css'
import { useEffect, useState } from 'react'
import { Deck, decksAPI, GetDecksResponse } from '../decks-api.ts'
import { setDecksAC } from '../decks-reducer.ts'
import { AppRootState, useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { selectDecks } from '../decks-selectors.ts'

export const DecksList = () => {
  // const [decks, setDecks] = useState<Deck[]>([])
  const dispatch = useAppDispatch()

  const decks = useAppSelector(selectDecks)

  useEffect(() => {
    // const fetchDecks = async () => {
    //   try {
    //     const response = await decksAPI.fetchDecks()
    //     dispatch(setDecksAC(response.data.items)) // Достаём колоды из response.data.items
    //   } catch (error) {
    //     console.error('Error fetching decks:', error)
    //   }
    // }
    // fetchDecks()
    decksAPI.fetchDecks().then((res)=>{
      dispatch(setDecksAC(res.data.items))
    })
  }, []);
  return <ul className={s.list}>
    {decks.map((deck) => (
      <DeckItem key={deck.id} deck={deck}/>
    ))}
  </ul>
}

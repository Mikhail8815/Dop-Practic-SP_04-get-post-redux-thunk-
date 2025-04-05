import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
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
    // decksAPI.fetchDecks().then((res)=>{
    //   dispatch(setDecksAC(res.data.items))
    // })

    dispatch(fetchDecksTC())
  }, [dispatch]);

  return {
    decks
  }
}
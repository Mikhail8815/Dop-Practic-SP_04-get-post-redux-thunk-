import { AddDeckParams, decksAPI } from './decks-api.ts'
import { addDecksAC, setDecksAC } from './decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'


export const fetchDecksTC = () => (dispatch: AppDispatch) => {
  decksAPI.fetchDecks().then((res)=>{
    dispatch(setDecksAC(res.data.items))
  })
}
export const addNewDeckTC = (params: AddDeckParams) => (dispatch: AppDispatch) => {
  return decksAPI.addDeck(params).then((res)=>{
    dispatch(addDecksAC(res.data))
  })
}
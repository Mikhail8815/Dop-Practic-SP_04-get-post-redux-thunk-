import { AddDeckParams, AddDeckResponse, Deck } from './decks-api.ts'
import { Dispatch } from 'react'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS':
      return {...state, decks: action.payload.decks}
    case 'ADD_DECK':
      return {...state, decks: [{...action.payload.deck, isFavorite: false}, ...state.decks]}
    default:
      return state
  }
}

// type SetDecksActionType = {
//   type: 'SET_DECKS'
//   payload: {
//     decks: Deck[]
//   }
// }

type  SetDecksActionType = ReturnType<typeof setDecksAC>
type  AddDeckActionType = ReturnType<typeof addDecksAC>
export type DecksActions = SetDecksActionType | AddDeckActionType


export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'SET_DECKS' as const,
    payload: {
      decks: decks
    }
  }
}
export const addDecksAC = (deck: AddDeckResponse) => {
  return {
    type: 'ADD_DECK' as const,
    payload: {
      deck: deck
    }
  }
}
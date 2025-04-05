import { Deck } from './decks-api.ts'
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
export type DecksActions = SetDecksActionType


export const setDecksAC = (decks: Deck[]) => {
  return {
    type: 'SET_DECKS',
    payload: {
      decks: decks
    }
  }
}

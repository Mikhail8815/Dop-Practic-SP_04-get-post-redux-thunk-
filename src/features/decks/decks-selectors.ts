import { AppRootState } from '../../app/store.ts'
import { Deck } from './decks-api.ts'

export const selectDecks = (state: AppRootState) => state.decksReducer.decks
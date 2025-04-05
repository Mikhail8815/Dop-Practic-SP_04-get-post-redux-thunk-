import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<GetDecksResponse>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<AddDeckResponse>('/v1/decks', params)
  }
}

export type AddDeckParams = {
  name: string
}

export type GetDecksResponse = {
  items: Deck[]; // Исправлено "items" вместо "decks"
  pagination: Pagination;
};

export type AddDeckResponse= Omit<Deck, 'isFavorite'> & {
  _count: { card: 0 };
};

export type _AddDeckResponse = {
  id: string,
  userId: string,
  name: string,
  isPrivate: string,
  cover: string,
  created: string,
  updated: string,
  cardsCount: number
}

export type Deck = {
  isFavorite: boolean;
  author: {
    id: string;
    name: string;
  };
  id: string;
  userId: string;
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
};

export type Pagination = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};
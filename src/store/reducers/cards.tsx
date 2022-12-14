import { createSlice, OutputSelector, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan, ApiCallPayload } from "../actions/api";
import { createSelector } from "reselect";

export interface Card {
    id: string,
    listId: string,
    boardId: string,
    title: string,
    commentsCount: number
}

interface TrelloApiCard {
    id: string,
    idBoard: string,
    idList: string,
    name: string,
    badges: {
        comments: number
    }
}

export interface CardsState {
    cards: Card[]
}

const slice = createSlice({
    name: 'cards',
    initialState: [] as Card[],
    reducers: {
        cardAdded: (cards, action) => {
            const card = action.payload;
            const mappedCard = {
                id: card.id,
                listId: card.idList,
                boardId: card.idBoard,
                title: card.name,
                commentsCount: card.badges.comments
            }
           cards.push(mappedCard);
        },
        cardUpdated: (cards, action) => {
            const card = action.payload;
            const mappedCard = {
                id: card.id,
                listId: card.idList,
                boardId: card.idBoard,
                title: card.name,
                commentsCount: card.badges.comments
            }
            const cardIndex = cards.findIndex(card => card.id === mappedCard.id);
            if (cardIndex !== -1) {
                cards[cardIndex] = mappedCard;
            }
        },
        cardArchived: (cards, action) => {
            const { id } = action.payload;
            const cardIndex = cards.findIndex(card => card.id === id);
            cards.splice(cardIndex, 1);
        },
        cardReceived: (cards, action) => {
            const responsePayload = action.payload;
            return responsePayload.map((card: TrelloApiCard) => {
                return {
                    id: card.id,
                    boardId: card.idBoard,
                    listId: card.idList,
                    title: card.name,
                    commentsCount: card.badges.comments
                }
            })
        }
    }
});

export const { cardAdded, cardUpdated, cardArchived, cardReceived } = slice.actions;

// Action creators

export const fetchCardsByBoardId = (boardId: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards/${boardId}/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, onSuccess: cardReceived.type })
}

export const addCard = (listId: string, title: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&idList=${listId}&name=${title}`;
    return apiCallBegan({ url, method: 'POST', onSuccess: cardAdded.type })
}

export const updateCard = (cardId: string, title: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${title}`;
    return apiCallBegan({ url, method: 'PUT', onSuccess: cardUpdated.type })
}

export const moveCard = (cardId: string, listId: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&idList=${listId}`;
    return apiCallBegan({ url, method: 'PUT', onSuccess: cardUpdated.type })
}

export const removeCard = (cardId: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, method: 'DELETE', onSuccess: cardArchived.type })
}

// Selectors

export const getCardsByListId = (listId: string): OutputSelector<CardsState, Card[], (res: Card[]) => Card[]> => createSelector(
    (state: CardsState) => state.cards,
    cards => cards.filter(card => card.listId === listId)
)

export default slice.reducer;
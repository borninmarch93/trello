import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import { createSelector } from "reselect";

export interface Card {
    id: string,
    listId: string,
    boardId: string,
    title: string
}

export interface CardsState {
    cards: Card[]
}

const slice = createSlice({
    name: 'cards',
    initialState: [] as Card[],
    reducers: {
        cardAdded: (cards, action) => {
            const { title, listId, boardId } = action.payload;
            cards.push({
                id: '',
                listId,
                boardId,
                title
            })
        },
        cardUpdated: (cards, action) => {
            const { id, title } = action.payload;
            const cardIndex = cards.findIndex(card => card.id === id);
            if (cardIndex !== -1) {
                cards[cardIndex].title = title;
            }
        },
        cardArchived: (cards, action) => {
            const { id } = action.payload;
            const cardIndex = cards.findIndex(card => card.id === id);
            cards.splice(cardIndex, 1);
        },
        cardReceived: (cards, action) => {
            const responsePayload = action.payload;
            return responsePayload.map((card: any) => {
                return {
                    id: card.id,
                    boardId: card.idBoard,
                    listId: card.idList,
                    title: card.name
                }
            })
        }
    }
});

export const { cardAdded, cardUpdated, cardArchived, cardReceived } = slice.actions;

// Action creators

export const fetchCardsByBoardId = (boardId: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards/${boardId}/cards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, onSuccess: cardReceived.type })
}

// Selectors

export const getCardsByListId = (listId: string) => createSelector(
    (state: CardsState) => state.cards,
    cards => cards.filter(card => card.listId === listId)
)

export default slice.reducer;
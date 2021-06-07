import { createSlice } from "@reduxjs/toolkit";

export interface Card {
    id: number,
    listId: number,
    title: string
}

export interface CardsState {
    cards: Card[]
}

const slice = createSlice({
    name: 'cards',
    initialState: [
        {
            id: 1,
            listId: 1,
            title: 'card1'
        },
        {
            id: 2,
            listId: 1,
            title: 'card2'
        },
        {
            id: 3,
            listId: 2,
            title: 'card1'
        },
        {
            id: 4,
            listId: 2,
            title: 'card2'
        },
        {
            id: 5,
            listId: 3,
            title: 'card1'
        },
        {
            id: 6,
            listId: 3,
            title: 'card2'
        }
    ],
    reducers: {
        cardAdded: (cards, action) => {
            const { title, listId } = action.payload;
            cards.push({
                id: Math.random() * 1000,
                listId,
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
        }
    }
})

export const { cardAdded, cardUpdated, cardArchived } = slice.actions;

export default slice.reducer;
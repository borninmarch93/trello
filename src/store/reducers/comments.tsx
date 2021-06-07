import { createSlice } from "@reduxjs/toolkit";

export interface Comment {
    id: number,
    cardId: number,
    firstName: string,
    lastName: string,
    createdAt: Date,
    text: string
}

export interface CommentsState {
    comments: Comment[]
}

const slice = createSlice({
    name: 'comments',
    initialState: [
        {
            id: Math.random() * 1000,
            cardId: 1,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date(),
            text: 'comment'
        },
        {
            id: Math.random() * 1000,
            cardId: 2,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date(),
            text: 'comment'
        },
        {
            id: Math.random() * 1000,
            cardId: 2,
            firstName: 'Pero',
            lastName: 'Peric',
            createdAt: new Date(),
            text: 'xaxaxaxa'
        },
        {
            id: Math.random() * 1000,
            cardId: 3,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date(),
            text: 'jjuujujujju'
        },
        {
            id: Math.random() * 1000,
            cardId: 3,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date(),
            text: 'lalalalla'
        }
    ],
    reducers: {
        commentAdded: (comments, action) => {
            const { firstName, lastName, text, cardId } = action.payload;
            comments.push({
                id: Math.random() * 1000,
                cardId,
                text,
                createdAt: new Date(),
                lastName,
                firstName
            })
        }
    }
})

export const { commentAdded } = slice.actions;

export default slice.reducer;
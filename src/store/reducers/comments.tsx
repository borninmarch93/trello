import { createSlice } from "@reduxjs/toolkit";

export interface Comment {
    id: number,
    cardId: number,
    firstName: string,
    lastName: string,
    createdAt: string,
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
            createdAt: new Date().toDateString(),
            text: 'comment'
        },
        {
            id: Math.random() * 1000,
            cardId: 2,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date().toDateString(),
            text: 'comment'
        },
        {
            id: Math.random() * 1000,
            cardId: 2,
            firstName: 'Pero',
            lastName: 'Peric',
            createdAt: new Date().toDateString(),
            text: 'xaxaxaxa'
        },
        {
            id: Math.random() * 1000,
            cardId: 3,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date().toDateString(),
            text: 'jjuujujujju'
        },
        {
            id: Math.random() * 1000,
            cardId: 3,
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            createdAt: new Date().toDateString(),
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
                createdAt: new Date().toDateString(),
                lastName,
                firstName
            })
        },
        commentUpdated: (comments, action) => {
            const { id, text } = action.payload;
            const index = comments.findIndex(comment => comment.id === id);
            comments[index].text = text;
        },
        commentRemoved: (comments, action) => {
            const { id } = action.payload;
            const index = comments.findIndex(comment => comment.id === id);
            comments.splice(index, 1);
        },
    }
})

export const { commentAdded, commentUpdated, commentRemoved } = slice.actions;

export default slice.reducer;
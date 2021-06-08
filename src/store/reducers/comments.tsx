import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import { createSelector } from "reselect";

export interface Comment {
    id: string,
    cardId: string,
    fullName: string,
    initials: string,
    createdAt: string,
    text: string
}

export interface CommentsState {
    comments: Comment[]
}

const slice = createSlice({
    name: 'comments',
    initialState: [] as Comment[],
    reducers: {
        commentAdded: (comments, action) => {
            const comment = action.payload;
            const mappedComment = {
                id: comment.id,
                cardId: comment.data.card.id,
                fullName: comment.memberCreator.fullName,
                initials: comment.memberCreator.initials,
                createdAt: comment.date,
                text: comment.data.text
            }
            comments.push(mappedComment);
        },
        commentUpdated: (comments, action) => {
           const comment = action.payload;
            const mappedComment = {
                id: comment.id,
                cardId: comment.data.card.id,
                fullName: comment.memberCreator.fullName,
                initials: comment.memberCreator.initials,
                createdAt: comment.date,
                text: comment.data.text
            }
            const index = comments.findIndex(comment => comment.id === mappedComment.id);
            comments[index] = mappedComment;
        },
        commentRemoved: (comments, action) => {
            const { id } = action.payload;
            const index = comments.findIndex(comment => comment.id === id);
            comments.splice(index, 1);
        },
        commentReceived: (comments, action) => {
            const responsePayload = action.payload;
            return responsePayload.map((comment: any) => {
                return {
                    id: comment.id,
                    cardId: comment.data.card.id,
                    fullName: comment.memberCreator.fullName,
                    initials: comment.memberCreator.initials,
                    createdAt: comment.date,
                    text: comment.data.text
                }
            })
        }
    }
})

export const { commentAdded, commentUpdated, commentRemoved, commentReceived } = slice.actions;

// Action creators

export const fetchCommentsByCardId = (cardId: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}/actions?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&filter=commentCard`;
    return apiCallBegan({ url, onSuccess: commentReceived.type })
}

export const addComment = (cardId: string, text: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}/actions/comments?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&text=${text}`;
    return apiCallBegan({ url, method: 'POST', onSuccess: commentAdded.type })
}

export const updateComment = (commentId: string, cardId: string, text: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}/actions/${commentId}/comments?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&text=${text}`;
    return apiCallBegan({ url, method: 'PUT', onSuccess: commentUpdated.type })
}

export const removeComment = (commentId: string, cardId: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/cards/${cardId}/actions/${commentId}/comments?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, method: 'DELETE', onSuccess: commentRemoved.type })
}

// Selectors

export const getCommentsByCardId = (cardId: string) => createSelector(
    (state: CommentsState) => state.comments,
    comments => comments.filter(comment => comment.cardId === cardId)
);

export default slice.reducer;
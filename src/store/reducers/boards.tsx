import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import { createSelector } from "reselect";

export interface Board {
    id: string,
    title: string
}

export interface BoardsState {
    boards: Board[]
}

const slice = createSlice({
    name: 'boards',
    initialState: [] as Board[],
    reducers: {
        boardAdded: (boards, action) => {
            const { title } = action.payload;
            boards.push({
                id: '',
                title
            })
        },
        boardUpdated: (boards, action) => {
            const { id, title } = action.payload;
            const boardIndex = boards.findIndex(board => board.id === id);
            if (boardIndex !== -1) {
                boards[boardIndex].title = title;
            }
        },
        boardArchived: (boards, action) => {
            const { id } = action.payload;
            const boardIndex = boards.findIndex(board => board.id === id);
            boards.splice(boardIndex, 1);
        },
        boardsReceived: (boards, action) => {
            console.log('payload', action.payload);
            const responsePayload = action.payload;
            return responsePayload.map((board: any) => {
                return {
                    id: board.id,
                    title: board.name
                }
            })
        }
    }
})

export const { boardAdded, boardUpdated, boardsReceived, boardArchived } = slice.actions;

// Action creators
export const fetchBoards = () => {
    const url = `${process.env.REACT_APP_API_HOST}/1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/boards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, onSuccess: boardsReceived.type })
}

// Selectors
export const getBoards = () => createSelector((state: BoardsState) => state.boards, boards => boards);

export default slice.reducer;
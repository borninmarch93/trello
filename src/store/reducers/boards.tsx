import { createSlice } from "@reduxjs/toolkit";

export interface Board {
    id: number,
    title: string
}

export interface BoardsState {
    boards: Board[]
}

const slice = createSlice({
    name: 'boards',
    initialState: [
        {
            id: 1,
            title: 'board1'
        },
        {
            id: 2,
            title: 'board2'
        }
    ],
    reducers: {
        boardAdded: (boards, action) => {
            const { title } = action.payload;
            boards.push({
                id: Math.random() * 1000,
                title
            })
        }
    }
})

export const { boardAdded } = slice.actions;

export default slice.reducer;
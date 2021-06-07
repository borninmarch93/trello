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
        }
    }
})

export const { boardAdded, boardUpdated, boardArchived } = slice.actions;

export default slice.reducer;
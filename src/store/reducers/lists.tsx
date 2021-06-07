import { createSlice } from "@reduxjs/toolkit";

export interface List {
    id: number,
    boardId: number,
    title: string
}

export interface ListsState {
    lists: List[]
}

const slice = createSlice({
    name: 'lists',
    initialState: [
        {
            id: 1,
            boardId: 1,
            title: 'list1'
        },
        {
            id: 2,
            boardId: 1,
            title: 'list2'
        },
        {
            id: 3,
            boardId: 2,
            title: 'list3'
        },
        {
            id: 4,
            boardId: 2,
            title: 'list4'
        }
    ],
    reducers: {
        listAdded: (lists, action) => {
            const { title, boardId } = action.payload;
            lists.push({
                id: Math.random() * 1000,
                boardId,
                title
            })
        }
    }
})

export const { listAdded } = slice.actions;

export default slice.reducer;
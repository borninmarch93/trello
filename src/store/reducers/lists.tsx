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
        },
        listUpdated: (lists, action) => {
            const { id, title } = action.payload;
            const listIndex = lists.findIndex(list => list.id === id);
            if (listIndex !== -1) {
                lists[listIndex].title = title;
            }
        },
        listArchived: (lists, action) => {
            const { id } = action.payload;
            const listIndex = lists.findIndex(list => list.id === id);
            lists.splice(listIndex, 1);
        },
    }
})

export const { listAdded, listUpdated, listArchived } = slice.actions;

export default slice.reducer;
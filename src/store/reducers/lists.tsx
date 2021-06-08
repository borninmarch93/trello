import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../actions/api";
import { createSelector } from "reselect";

export interface List {
    id: string,
    boardId: string,
    title: string
}

export interface ListsState {
    lists: List[]
}

const slice = createSlice({
    name: 'lists',
    initialState: [] as List[],
    reducers: {
        listAdded: (lists, action) => {
            const {title, boardId} = action.payload;
            lists.push({
                id: '',
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
        listsReceived: (lists, action) => {
            const responsePayload = action.payload;
            return responsePayload.map((list: any) => {
                return {
                    id: list.id,
                    boardId: list.idBoard,
                    title: list.name
                }
            })
        }
    }
})

export const { listAdded, listUpdated, listArchived, listsReceived } = slice.actions;


// Action creators
export const fetchLists = (boardId: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards/${boardId}/lists?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({url, onSuccess: listsReceived.type})
}

// Selectors
export const getLists = (boardId: string) => createSelector(
    (state: ListsState) => state.lists,
    lists => lists.filter(list => list.boardId === boardId)
);

export const getListById = (listId: string) => createSelector(
    (state: ListsState) => state.lists,
    lists => lists.find(list => list.id === listId)
);

export default slice.reducer;
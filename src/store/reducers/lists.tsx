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
            const list = action.payload;
            const mappedList = {
                id: list.id,
                boardId: list.idBoard,
                title: list.name
            }
            lists.push(mappedList);
        },
        listUpdated: (lists, action) => {
            const list = action.payload;
            const mappedList = {
                id: list.id,
                title: list.name
            }
            const listIndex = lists.findIndex(list => list.id === mappedList.id);
            if (listIndex !== -1) {
                lists[listIndex].title = mappedList.title;
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

export const addList = (boardId: string, title: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/lists?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&idBoard=${boardId}&name=${title}`;
    return apiCallBegan({url, method: 'POST', onSuccess: listAdded.type})
}

export const updateList = (listId: string, title: string) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/lists/${listId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${title}`;
    return apiCallBegan({url, method: 'PUT', onSuccess: listUpdated.type})
}

export const archiveList = (listId: string, value: boolean) => {
    const url = `${process.env.REACT_APP_API_HOST}/1/lists/${listId}/closed?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&value=${value}`;
    return apiCallBegan({url, method: 'PUT', onSuccess: listArchived.type})
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
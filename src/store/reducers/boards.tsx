import { createSlice, OutputSelector, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan, ApiCallPayload } from "../actions/api";
import { createSelector } from "reselect";

export interface Board {
    id: string,
    title: string
}

interface TrelloApiBoard {
    id: string,
    name: string
}

export interface BoardsState {
    boards: Board[]
}

const slice = createSlice({
    name: 'boards',
    initialState: [] as Board[],
    reducers: {
        boardAdded: (boards, action) => {
            const { id, name } = action.payload;
            boards.push({
                id,
                title: name
            })
        },
        boardUpdated: (boards, action) => {
            const { id, name } = action.payload;
            const boardIndex = boards.findIndex(board => board.id === id);
            if (boardIndex !== -1) {
                boards[boardIndex].title = name;
            }
        },
        boardArchived: (boards, action) => {
            const { id } = action.payload;
            const boardIndex = boards.findIndex(board => board.id === id);
            boards.splice(boardIndex, 1);
        },
        boardsReceived: (boards, action) => {
            const responsePayload = action.payload;
            return responsePayload.map((board: TrelloApiBoard) => {
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
export const fetchBoards = (): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/organizations/${process.env.REACT_APP_ORGANIZATION_ID}/boards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, onSuccess: boardsReceived.type })
}

export const addBoard = (title: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${title}`;
    return apiCallBegan({ url, method: 'POST', onSuccess: boardAdded.type })
}

export const updateBoard = (boardId: string, title: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards/${boardId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${title}`;
    return apiCallBegan({ url, method: 'PUT', onSuccess: boardUpdated.type })
}

export const archiveBoard = (boardId: string): PayloadAction<ApiCallPayload> => {
    const url = `${process.env.REACT_APP_API_HOST}/1/boards/${boardId}?key=${process.env.REACT_APP_API_KEY}&token=${process.env.REACT_APP_TOKEN}`;
    return apiCallBegan({ url, method: 'DELETE', onSuccess: boardArchived.type })
}

// Selectors
export const getBoards = (): OutputSelector<BoardsState, Board[], (res: Board[]) => Board[]> => createSelector(
    (state: BoardsState) => state.boards,
    boards => boards
);

export const getBoardById = (boardId: string): OutputSelector<BoardsState, Board | undefined, (res: Board[]) => Board | undefined> => createSelector(
    (state: BoardsState) => state.boards,
    boards => boards.find(board => board.id === boardId)
);

export default slice.reducer;
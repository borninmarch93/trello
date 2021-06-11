import configureStore from "../configureStore";
import { addBoard, archiveBoard, fetchBoards, updateBoard } from "../reducers/boards";

describe("boards store", () => {
    let store;

    beforeEach(() => {
        store = configureStore();
        fetch.resetMocks();
    })

    test("fetch boards", async () => {
        // given
        const boardPayload = [{ id: "1", name: "t" }];
        fetch.mockResponseOnce(JSON.stringify(boardPayload));

        // when
        await store.dispatch(fetchBoards());

        // then
        const expectedBoard = { id: "1", title: "t" };
        expect(store.getState().boards).toContainEqual(expectedBoard);
    });

    test("add board", async () => {
        // given
        const newBoard = { id: "1", name: "new" };
        fetch.mockResponseOnce(JSON.stringify(newBoard));

        // when
        await store.dispatch(addBoard(newBoard.name));

        // then
        const expectedBoard = { id: "1", title: "new" };
        expect(store.getState().boards.length).toBe(1);
        expect(store.getState().boards).toContainEqual(expectedBoard);
    });

    test("update board", async () => {
        // given
        const newBoard = { id: "1", name: "new" };
        const updatedBoard = { id: "1", name: "updated" };
        fetch.mockResponses([JSON.stringify(newBoard)], [JSON.stringify(updatedBoard)]);

        // when
        await store.dispatch(addBoard(newBoard.name));
        await store.dispatch(updateBoard(updatedBoard.id, updatedBoard.name));

        // then
        const expectedBoard = { id: "1", title: "updated" };
        expect(store.getState().boards.find(board => board.id === updatedBoard.id)).toMatchObject(expectedBoard);
    });

    test("archive board", async () => {
        // given
        const newBoard = { id: "1", name: "new" };
        fetch.mockResponses([JSON.stringify(newBoard)], [JSON.stringify({_value: null})]);

        // when
        await store.dispatch(addBoard(newBoard.name));
        await store.dispatch(archiveBoard(newBoard.id));

        // then
        expect(store.getState().boards.length).toBe(0);
    });
})

export {}
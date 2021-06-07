import React from "react";
import List from "../List/List";
import AddList from "../List/components/AddList";
import { useDispatch, useSelector } from "react-redux";
import { listAdded, ListsState } from "../../store/reducers/lists";

interface BoardProps {
    id: number
}

const Board: React.FC<BoardProps> = ({ id }) => {
    const dispatch = useDispatch();
    const lists = useSelector((state: ListsState) => state.lists.filter(list => list.boardId === id));

    const addNewListHandler = (title: string) => {
        dispatch(listAdded({
            title,
            boardId: id
        }))
    }

    return (
        <main className="content">
            <div className="container">
                <div className="board">
                    {lists && lists.map((list, i) => {
                        return <List id={list.id} key={i} />
                    })}
                    <AddList onAddNewList={addNewListHandler} />
                </div>
            </div>
        </main>
    )
}

export default Board;
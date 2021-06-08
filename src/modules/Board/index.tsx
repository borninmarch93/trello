import React, { useEffect } from "react";
import List from "../List/List";
import AddList from "../List/components/AddList";
import { useDispatch, useSelector } from "react-redux";
import { addList, fetchLists, getLists } from "../../store/reducers/lists";
import { fetchCardsByBoardId } from "../../store/reducers/cards";

interface BoardProps {
    id: string
}

const Board: React.FC<BoardProps> = ({ id }) => {
    const dispatch = useDispatch();
    const lists = useSelector(getLists(id));

    useEffect(() => {
        dispatch(fetchLists( id ));
        dispatch(fetchCardsByBoardId(id));
    }, [])

    const addNewListHandler = (title: string) => {
        dispatch(addList(id, title));
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
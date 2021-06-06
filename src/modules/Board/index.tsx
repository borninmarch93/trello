import React, { useState } from "react";
import List from "../List/List";
import AddList from "../List/components/AddList";

export type ListType = {
    title: string
}

const Board: React.FC = () => {
    const [lists, setLists] = useState<ListType[]>([]);

    const addNewListHandler = (title: string) => {
        setLists([...lists, { title }]);
    }

    return (
        <main className="content">
            <div className="container">
                <div className="board">
                    {lists && lists.map((list, i) => {
                        return <List key={i} listTitle={list.title} />
                    })}
                    <AddList onAddNewList={addNewListHandler} />
                </div>
            </div>
        </main>
    )
}

export default Board;
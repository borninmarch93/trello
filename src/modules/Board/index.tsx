import React from "react";
import List from "../List";
import NewList from "../NewList";

const Board: React.FC = () => {
    return (
        <main className="content">
            <div className="container">
                <div className="board">
                    <List />
                    <NewList />
                </div>
            </div>
        </main>
    )
}

export default Board;
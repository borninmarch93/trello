import Board from "../modules/Board";
import Header from "../components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { BoardsState } from "../store/reducers/boards";

const Dashboard: React.FC = () => {

    const board = useSelector((state: BoardsState) => {
        return state.boards[2];
    });

    return (
        <div className="main-container">
            <Header/>
            {board && <Board id={board.id}/>}
        </div>
    )
}

export default Dashboard;
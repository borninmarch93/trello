import { RouteComponentProps } from "react-router";
import Board from "../modules/Board";
import Header from "../components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { getBoardById } from "../store/reducers/boards";

const Dashboard: React.FC<RouteComponentProps<any>> = ({ match }) => {

    const board = useSelector(getBoardById(match.params.id));

    return (
        <div className="main-container">
            <Header boardTitle={board?.title} />
            {board ? <Board id={board.id} selectedCardId={match.params.cardId} /> : "Board does not exist"}
        </div>
    )
}

export default Dashboard;
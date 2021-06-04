import Board from "../modules/Board";
import Header from "../components/Header";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="main-container">
            <Header />
            <Board />
        </div>
    )
}

export default Dashboard;
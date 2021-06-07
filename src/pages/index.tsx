import Board from "../modules/Board";
import Header from "../components/Header";
import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="main-container">
            <Header />
            <Board id={1}/>
        </div>
    )
}

export default Dashboard;
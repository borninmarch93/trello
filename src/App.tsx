import React from "react";
import './sass/main.scss';
import Header from "./components/Header";
import Board from "./modules/Board";

const App: React.FC = () => {
  return (
    <div className="main-container">
        <Header />
        <Board />
    </div>
  );
}

export default App;

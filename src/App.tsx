import React from "react";
import './sass/main.scss';
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <div className="main-container">
        <div className="header">
            <Button>Boards</Button>
            <h2>Trello</h2>
            <div>user</div>
        </div>
        <main className="content">
            <div className="container">

            </div>
        </main>
    </div>
  );
}

export default App;

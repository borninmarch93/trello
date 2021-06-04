import React from "react";
import Button from "../Button";

const Header: React.FC = () => {
    return (
        <div className="header">
            <Button>Boards</Button>
            <h2>Trello</h2>
            <div><Button>+</Button>user</div>
        </div>
    )
}

export default Header;
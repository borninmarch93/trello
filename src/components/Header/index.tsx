import React from "react";
import Button from "../Button";

const Header: React.FC = () => {
    return (
        <div className="header">
            <Button variant="transparent">Boards</Button>
            <h2>Trello</h2>
            <div>
                <Button variant="transparent">
                    +
                </Button>
                user
            </div>
        </div>
    )
}

export default Header;
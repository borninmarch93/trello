import React, { useState } from "react";
import Button from "../Button";
import Avatar from "../Avatar";
import Grid from "../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountPopover from "./AccountPopover";
import CreateMenu from "./CreateMenu";

const Header: React.FC = () => {
    const [showAccount, setShowAccount] = useState(false);
    const [showBoard, setShowBoard] = useState(false);

    return (
        <div className="header">
            <Button variant="transparent">Boards</Button>
            <h2>Trello</h2>
            <Grid row={true}>
                <div>
                    <Button variant="transparent" onClick={() => setShowBoard(!showBoard)}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                    <CreateMenu show={showBoard} onClose={() => setShowBoard(false)}/>
                </div>
                <a onClick={() => setShowAccount(!showAccount)}>
                    <Avatar username="VB"/>
                </a>
                <AccountPopover show={showAccount} onClose={() => setShowAccount(false)}/>
            </Grid>
        </div>
    )
}

export default Header;
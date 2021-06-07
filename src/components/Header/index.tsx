import React, { useState } from "react";
import Button from "../Button";
import Avatar from "../Avatar";
import Grid from "../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountPopover from "./AccountPopover";
import CreateMenu from "./CreateMenu";
import PopoverMenu from "../PopoverMenu";
import { useSelector } from "react-redux";
import { Board, BoardsState } from "../../store/reducers/boards";

const Header: React.FC = () => {
    const [showAccount, setShowAccount] = useState(false);
    const [showBoard, setShowBoard] = useState(false);
    const [showBoards, setShowBoards] = useState(false);

    const boards: Board[] = useSelector((state: BoardsState) => state.boards);

    return (
        <div className="header">
            <Grid row={true} expanded={true}>
                <Grid column={true} lg={4}>
                    <Button onClick={() => setShowBoards(!showBoards)} variant="transparent">Boards</Button>
                    <Button variant="transparent">nn</Button>
                    <PopoverMenu
                        position='left'
                        title="boards"
                        onClose={() => setShowBoards(false)}
                        show={showBoards}>
                        <div className="popover__boards">
                            {boards && boards.map((board: any, index: any) => {
                                return <div className="popover__board" key={index}>{board.title}</div>
                            })}
                        </div>
                    </PopoverMenu>
                </Grid>
                <Grid column={true} lg={4}>
                    <h2>Trello</h2>
                </Grid>
                <Grid column={true} lg={4}>
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
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
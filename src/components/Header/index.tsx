import React, { useState } from "react";
import Button from "../Button";
import Avatar from "../Avatar";
import Grid from "../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountPopover from "./AccountPopover";
import CreateMenu from "./CreateMenu";
import { Board } from "../../store/reducers/boards";
import { Member } from "../../store/reducers/members";
import BoardsPopover from "./BoardsPopover";
import EditableField from "../EditableField";

interface HeaderProps {
    boardId?: string,
    boardTitle?: string
    boards: Board[],
    member: Member,
    onUpdateBoard: (id: string, title: string) => void
}

const Header: React.FC<HeaderProps> = ({ boardId, boardTitle, boards, member, onUpdateBoard }) => {
    const [showAccount, setShowAccount] = useState(false);
    const [showBoard, setShowBoard] = useState(false);
    const [showBoards, setShowBoards] = useState(false);

    return (
        <div className="header">
            <Grid row={true} expanded={true}>
                <Grid column={true} lg={4}>
                    <Button onClick={() => setShowBoards(!showBoards)} variant="transparent">Boards</Button>
                    {boardId && boardTitle && <EditableField
                        value={boardTitle}
                        renderValue={(value) => <Button variant="transparent">{value}</Button>}
                        onSubmit={(value) => onUpdateBoard(boardId, value)}/>}
                    <BoardsPopover show={showBoards} onClose={() => setShowBoards(false)} boards={boards}/>
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
                        <AccountPopover
                            show={showAccount}
                            member={member}
                            onClose={() => setShowAccount(false)}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;
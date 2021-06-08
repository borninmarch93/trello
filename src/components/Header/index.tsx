import React, { useEffect, useState } from "react";
import Button from "../Button";
import Avatar from "../Avatar";
import Grid from "../Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faPlus } from "@fortawesome/free-solid-svg-icons";
import AccountPopover from "./AccountPopover";
import CreateMenu from "./CreateMenu";
import PopoverMenu from "../PopoverMenu";
import { useDispatch, useSelector } from "react-redux";
import { archiveBoard, Board, fetchBoards, getBoards, updateBoard } from "../../store/reducers/boards";
import EditableField from "../EditableField";

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const [showAccount, setShowAccount] = useState(false);
    const [showBoard, setShowBoard] = useState(false);
    const [showBoards, setShowBoards] = useState(false);

    const boards: Board[] = useSelector(getBoards());

    useEffect(() => {
        dispatch(fetchBoards());
    }, [])

    const handleArchiveBoard = (event: any, id: string) => {
        event.stopPropagation();
        dispatch(archiveBoard(id));
    }

    const handleUpdateBoard = (id: string, title: string) => {
        dispatch(updateBoard(id, title));
    }

    const handleBoardChange = () => {
        console.log('b')
    }

    return (
        <div className="header">
            <Grid row={true} expanded={true}>
                <Grid column={true} lg={4}>
                    <Button onClick={() => setShowBoards(!showBoards)} variant="transparent">Boards</Button>
                    <Button variant="transparent">{boards[0] && boards[0].title}</Button>
                    <PopoverMenu
                        position='left'
                        title="boards"
                        onClose={() => setShowBoards(false)}
                        show={showBoards}>
                        <div className="popover__boards">
                            {boards && boards.map((board: any, index: any) => {
                                return <div
                                    onClick={handleBoardChange}
                                    className="popover__board"
                                    key={index}>
                                    <EditableField
                                        value={board.title}
                                        renderValue={(value) => <span>{value}</span>}
                                        onSubmit={(value) => handleUpdateBoard(board.id, value)}/>
                                    <Button variant="transparent" onClick={
                                        (event) => handleArchiveBoard(event, board.id)}>
                                        <FontAwesomeIcon icon={faArchive}/>
                                    </Button>
                                </div>
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
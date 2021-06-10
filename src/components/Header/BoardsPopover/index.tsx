import EditableField from "../../EditableField";
import Button from "../../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import PopoverMenu from "../../PopoverMenu";
import React from "react";
import { archiveBoard, Board, updateBoard } from "../../../store/reducers/boards";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

interface BoardsPopoverProps {
    show: boolean,
    onClose: () => void,
    boards: Board[]
}

const BoardsPopover: React.FC<BoardsPopoverProps> = ({ show, onClose, boards }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleArchiveBoard = (event: any, id: string) => {
        event.stopPropagation();
        dispatch(archiveBoard(id));
    }

    const handleUpdateBoard = (id: string, title: string) => {
        dispatch(updateBoard(id, title));
    }

    const handleBoardChange = (boardId: string) => {
        history.push(`/boards/${boardId}`);
        onClose();
    }

    return (<PopoverMenu
        position='left'
        title="boards"
        onClose={onClose}
        show={show}>
        <div className="popover__boards">
            {boards && boards.map((board: any, index: any) => {
                return <div
                    onClick={() => handleBoardChange(board.id)}
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
    </PopoverMenu>);
}

export default BoardsPopover;
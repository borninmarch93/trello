import { Redirect, RouteComponentProps } from "react-router";
import Board from "../modules/Board";
import { useDispatch, useSelector } from "react-redux";
import { Board as BoardType, fetchBoards, getBoardById, getBoards, updateBoard } from "../store/reducers/boards";
import Header from "../components/Header";
import React, { useEffect } from "react";
import { fetchMember, getMember, Member } from "../store/reducers/members";

const Dashboard: React.FC<RouteComponentProps<any>> = ({match}) => {
    const dispatch = useDispatch();

    const boards: BoardType[] = useSelector(getBoards());
    const board: BoardType | undefined = useSelector(getBoardById(match.params.id));
    const member: Member = useSelector(getMember());

    useEffect(() => {
        dispatch(fetchBoards());
        dispatch(fetchMember());
    }, [])

    const handleUpdateBoard = (id: string, title: string) => {
        dispatch(updateBoard(id, title));
    }

    return (
        <React.Fragment>
            {match.params.id ?
                <div className="main-container">
                    <Header boardId={board?.id} boardTitle={board?.title} boards={boards} member={member} onUpdateBoard={handleUpdateBoard}/>
                    {board ? <Board id={board.id} selectedCardId={match.params.cardId}/> : "Board does not exist"}
                </div> :
                <React.Fragment>{boards[0] ? <Redirect to={`/boards/${boards[0].id}`}/> : <div>Loading...</div>}</React.Fragment>}
        </React.Fragment>
    )
}

export default Dashboard;
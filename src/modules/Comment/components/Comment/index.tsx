import Grid from "../../../../components/Grid";
import React, { useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { commentRemoved, commentUpdated } from "../../../../store/reducers/comments";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";

export interface CommentProps {
    id: number,
    firstName: string,
    lastName: string,
    createdAt: string,
    text: string
}

const Comment: React.FC<CommentProps> = ({ id, firstName, lastName, createdAt, text }) => {
    const dispatch = useDispatch();
    const [editComment, setEditComment] = useState(false);
    const [newComment, setNewComment] = useState(text);

    const getInitials = () => {
        const firstInitial = firstName ? firstName.charAt(0) : '';
        const lastInitial = lastName ? lastName.charAt(0) : '';
        return `${firstInitial}${lastInitial}`
    }

    const handleUpdateComment = () => {
        dispatch(commentUpdated({ id, text: newComment }));
        setEditComment(false);
    }

    const handleDeleteComment = () => {
        dispatch(commentRemoved({ id }));
    }

    return (
        <div className="comment--show">
            <Grid row={true}>
                <div className="comment__avatar-container">
                    <div className="avatar">
                        <span>{getInitials()}</span>
                    </div>
                </div>
                <div className="comment__owner">
                    <p>{firstName} {lastName}</p>
                    <span>{moment(createdAt).fromNow()}</span>
                </div>
            </Grid>
            <Grid row={true}>
                {!editComment &&
                    <div className="comment__item">
                        {text}
                    </div>}
                {editComment &&
                <div className="comment--update">
                   <Textarea
                        onChange={(event) => setNewComment(event.target.value)}
                        value={newComment}/>
                    <Button variant="primary" onClick={handleUpdateComment}>Save</Button>
                </div>}

            </Grid>
            <Grid row={true} className="comment__actions">
                <a onClick={() => setEditComment(true)}>Edit</a>
                <span>-</span>
                <a onClick={handleDeleteComment}>Delete</a>
            </Grid>
        </div>
    )
}

export default Comment;
import Grid from "../../../../components/Grid";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { removeComment, updateComment } from "../../../../store/reducers/comments";
import Button from "../../../../components/Button";
import Textarea from "../../../../components/Textarea";
import classNames from "classnames";

export interface CommentProps {
    id: string,
    cardId: string,
    fullName: string,
    initials: string,
    createdAt: string,
    text: string,
    selected?: boolean
}

const Comment: React.FC<CommentProps> = ({ id, cardId, initials, fullName, createdAt, text, selected = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [editComment, setEditComment] = useState(false);
    const [newComment, setNewComment] = useState(text);

    const handleUpdateComment = () => {
        dispatch(updateComment(id, cardId, newComment));
        setEditComment(false);
    }

    const handleDeleteComment = () => {
        dispatch(removeComment(id, cardId));
    }

    const classes = classNames(
        'comment--show',
        selected && 'comment--selected'
    )

    return (
        <div className={classes}>
            <Grid row={true}>
                <div className="comment__avatar-container">
                    <div className="avatar">
                        <span>{initials}</span>
                    </div>
                </div>
                <div className="comment__owner">
                    <p>{fullName}</p>
                    <Link title={moment(createdAt).format('MMMM D, YYYY HH:mm A')} to={`${history.location.pathname}#commentId=${id}`}>
                        {moment(createdAt).fromNow()}
                    </Link>
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
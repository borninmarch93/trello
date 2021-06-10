import React, { useEffect, useState } from "react";
import Comment, { CommentProps } from "./Comment";
import { useHistory } from "react-router-dom";

export interface CommentListProps {
    comments: CommentProps[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    const history = useHistory();
    const [selectedCommentId, setSelectedCommentId] = useState("");

    useEffect(() => {
        setCommentIdFromUrl();
    }, [history.location]);

    const setCommentIdFromUrl = () => {
        const { hash } = history.location;
        const index = hash.indexOf("commentId=");
        if (index !== -1) {
            setSelectedCommentId(hash.slice(index + "commentId=".length));
        }
    }

    return (
        <div className="comment-list">
            {comments && comments.map((comment, index) => {
                return <Comment
                    key={index}
                    id={comment.id}
                    cardId={comment.cardId}
                    createdAt={comment.createdAt}
                    fullName={comment.fullName}
                    initials={comment.initials}
                    text={comment.text}
                    selected={comment.id === selectedCommentId}
                />
            })}
        </div>
    )
}

export default CommentList;
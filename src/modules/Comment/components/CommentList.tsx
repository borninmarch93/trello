import React from "react";
import Comment, { CommentProps } from "./Comment";

export interface CommentListProps {
    comments: CommentProps[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    return (
        <div>
            {comments && comments.map((comment, index) => {
                return <Comment
                    key={index}
                    id={comment.id}
                    cardId={comment.cardId}
                    createdAt={comment.createdAt}
                    fullName={comment.fullName}
                    initials={comment.initials}
                    text={comment.text}
                />
            })}
        </div>
    )
}

export default CommentList;
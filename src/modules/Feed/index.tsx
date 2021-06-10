import React from "react";
import AddComment from "../Comment/components/AddComment";
import CommentList, { CommentListProps } from "../Comment/components/CommentList";

interface FeedProps {
    onAdd: (comment: string) => void
}

const Feed: React.FC<CommentListProps & FeedProps>= ({ comments, onAdd }) => {
    return (
       <React.Fragment>
           <AddComment onAdd={onAdd}/>
           <CommentList comments={comments}/>
       </React.Fragment>
    )
}

export default Feed;
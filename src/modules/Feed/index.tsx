import React from "react";
import AddComment from "../Comment/components/AddComment";
import CommentList, { CommentListProps } from "../Comment/components/CommentList";

const Feed: React.FC<CommentListProps> = ({ comments }) => {

    return (
       <React.Fragment>
           <AddComment />
           <CommentList comments={comments}/>
       </React.Fragment>
    )
}

export default Feed;
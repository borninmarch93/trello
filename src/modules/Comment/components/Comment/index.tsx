import Grid from "../../../../components/Grid";
import React from "react";
import moment from "moment";

export interface CommentProps {
    firstName: string,
    lastName: string,
    createdAt: Date,
    text: string
}

const Comment: React.FC<CommentProps> = ({ firstName, lastName, createdAt, text }) => {

    const getInitials = () => {
        const firstInitial = firstName ? firstName.charAt(0) : '';
        const lastInitial = lastName ? lastName.charAt(0) : '';
        return `${firstInitial}${lastInitial}`
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
                <div className="comment__item">
                    {text}
                </div>
            </Grid>
        </div>
    )
}

export default Comment;
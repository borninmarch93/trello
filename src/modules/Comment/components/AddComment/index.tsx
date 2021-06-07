import Avatar from "../../../../components/Avatar";
import Textarea from "../../../../components/Textarea";
import React, { useState } from "react";
import Button from "../../../../components/Button";
import Grid from "../../../../components/Grid";

interface AddCommentProps {
    onAdd: (comment: string) => void
}

const AddComment: React.FC<AddCommentProps> = ({ onAdd }) => {
    const [comment, setComment] = useState('');

    const textHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setComment(value);
    }

    const addHandler = () => {
        onAdd(comment);
        setComment('');
    }

    return (
        <React.Fragment>
            <div className="comment">
                <div className="comment__avatar-container">
                    <Avatar username="VB" />
                </div>
                <div className="comment__textarea">
                    <Textarea
                        value={comment}
                        onChange={(event) => textHandler(event)}
                        placeholder="Write a comment..."/>
                </div>
            </div>
            <Grid row={true} className="comment__btn">
                <Button onClick={addHandler} variant="primary">Save</Button>
            </Grid>
        </React.Fragment>
    )
}

export default AddComment;
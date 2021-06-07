import React, { useState } from "react";
import Modal from "../../components/Modal";
import Grid from "../../components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faComment } from "@fortawesome/free-solid-svg-icons";
import Feed from "../Feed";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import { useDispatch, useSelector } from "react-redux";
import { commentAdded, CommentsState } from "../../store/reducers/comments";
import Button from "../../components/Button";
import EditableField from "../../components/EditableField";
import { cardArchived, cardUpdated } from "../../store/reducers/cards";

export interface CardProps {
    id: number,
    list: string,
    title: string
}

const Card: React.FC<CardProps> = ({ id, title, list }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const comments = useSelector((state: CommentsState) => {
        return state.comments.filter(comment => comment.cardId === id)
    })

    const onAddCommentHandler = (comment: string) => {
        dispatch(commentAdded({
            firstName: 'Vedrana',
            lastName: 'Bradasevic',
            text: comment,
            cardId: id
        }))
    }

    const editTitleHandler = (value: string) => {
        dispatch(cardUpdated({ id, title: value }))
    }

    const archiveCard = () => {
        dispatch(cardArchived({ id }))
    }

    return (
        <React.Fragment>
            <div className='card'>
                <div className="card__title" onClick={() => setShow(true)}>
                    {title}
                </div>
                <Button variant="transparent" onClick={() => archiveCard()}>
                    <FontAwesomeIcon icon={faArchive}/>
                </Button>
            </div>
            <Modal size="lg" show={show} onClose={() => setShow(false)} title="card">
                <Modal.Header>
                    <Grid row className="modal__header">
                        <Grid column={true} lg={12}>
                            <div className="modal__title">
                                <FontAwesomeIcon icon={faCreditCard}/>
                                <div>
                                   <EditableField
                                       value={title}
                                       renderValue={(value) => <h4>{value}</h4>}
                                       onSubmit={editTitleHandler} />
                                    <p>in list <span className="modal--underline">{list}</span></p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Modal.Header>
                <Modal.Body>
                    <Grid row={true}>
                        <Grid column={true} lg={12}>
                            <div className="modal__title">
                                <FontAwesomeIcon icon={faComment}/>
                                <div>
                                    <h3>Activity</h3>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Feed comments={comments} onAdd={onAddCommentHandler}/>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default Card;
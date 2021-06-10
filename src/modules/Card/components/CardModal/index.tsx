import Modal from "../../../../components/Modal";
import Grid from "../../../../components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";
import EditableField from "../../../../components/EditableField";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Feed from "../../../Feed";
import React, { useEffect } from "react";
import { addComment, fetchCommentsByCardId, getCommentsByCardId } from "../../../../store/reducers/comments";
import { useDispatch, useSelector } from "react-redux";
import { updateCard } from "../../../../store/reducers/cards";
import { useHistory } from "react-router-dom";

interface CardModalProps {
    show: boolean,
    onClose: () => void,
    id: string,
    title: string,
    list: string
}

const CardModal: React.FC<CardModalProps> = ({show, onClose, id, title, list}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (show) {
            dispatch(fetchCommentsByCardId(id));
            cleanPathname();
            history.replace({pathname: `${history.location.pathname}/cards/${id}`})
        }
    }, [show]);

    const comments = useSelector(getCommentsByCardId(id));

    const closeHandler = () => {
        cleanPathname();
        onClose();
    }

    const cleanPathname = () => {
        const pathname = history.location.pathname;
        const index = pathname.indexOf("/cards");
        if (index !== -1) {
            history.replace({pathname: pathname.slice(0, index)});
        }
    }

    const onAddCommentHandler = (comment: string) => {
        dispatch(addComment(id, comment));
    }

    const editTitleHandler = (value: string) => {
        dispatch(updateCard(id, value));
    }

    return (
        <Modal size="lg" show={show} onClose={closeHandler} title="card">
            <Modal.Header>
                <Grid row className="modal__header">
                    <Grid column={true} lg={12}>
                        <div className="modal__title">
                            <FontAwesomeIcon icon={faCreditCard}/>
                            <div>
                                <EditableField
                                    value={title}
                                    renderValue={(value) => <h4>{value}</h4>}
                                    onSubmit={editTitleHandler}/>
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
    );
}

export default CardModal;
import React, { useState } from "react";
import Modal from "../../components/Modal";
import Grid from "../../components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import Feed from "../Feed";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons/faCreditCard";

export interface CardProps {
    title: string,
    list: string
}

const comments = [
    {
        createdAt: new Date(),
        text: 'hello world',
        firstName: 'Vedrana',
        lastName: 'Bradasevic'
    }
]

const Card: React.FC<CardProps> = ({ title, list }) => {
    const [show, setShow] = useState(false);

    return (
        <React.Fragment>
            <div className='card' onClick={() => setShow(true)}>
                {title}
            </div>
            <Modal size="lg" show={show} onClose={() => setShow(false)} title="card">
                <Modal.Header>
                    <Grid row className="modal__header">
                        <Grid column={true} lg={12}>
                            <div className="modal__title">
                                <FontAwesomeIcon icon={faCreditCard}/>
                                <div>
                                    <h4>{title}</h4>
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
                    <Feed comments={comments} />
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default Card;
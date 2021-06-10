import React, { useState } from "react";
import Grid from "../../components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faComments } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { removeCard } from "../../store/reducers/cards";
import CardModal from "./components/CardModal";

export interface CardProps {
    id: string,
    list: string,
    title: string,
    commentsCount: number,
    selected?: boolean
}

const Card: React.FC<CardProps> = ({ id, title, commentsCount, list, selected= false }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(selected);

    const archiveCard = () => {
        dispatch(removeCard(id));
    }

    return (
        <React.Fragment>
            <div className='card'>
                <Grid row={true}>
                    <div className="card__title" onClick={() => setShow(true)}>
                        {title}
                    </div>
                    <Button variant="transparent" onClick={() => archiveCard()}>
                        <FontAwesomeIcon icon={faArchive}/>
                    </Button>
                </Grid>
                {Boolean(commentsCount) &&
                    <Grid className="card__comments" row={true}>
                        <FontAwesomeIcon icon={faComments}/>
                        <span>{commentsCount}</span>
                    </Grid>
                }
            </div>
            <CardModal
                show={show}
                onClose={() => setShow(false)}
                id={id}
                title={title}
                list={list}
            />
        </React.Fragment>
    )
}

export default Card;
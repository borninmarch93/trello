import React from "react";
import AddCard from "../Card/components/AddCard";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { archiveList, getListById, updateList } from "../../store/reducers/lists";
import { addCard, getCardsByListId, moveCard } from "../../store/reducers/cards";
import EditableField from "../../components/EditableField";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import DraggableItem from "../../components/DragAndDrop/DraggableItem";
import DroppableContainer from "../../components/DragAndDrop/DroppableContainer";

interface ListProps {
    id: string,
    selectedCardId?: string
}

const List: React.FC<ListProps> = ({id, selectedCardId}) => {
    const dispatch = useDispatch();
    const list = useSelector(getListById(id));
    const cards = useSelector(getCardsByListId(id));

    const addNewCardHandler = (title: string) => {
        if (title.length < 1) {
            return;
        }
        dispatch(addCard(id, title));
    }

    const handleUpdateList = (value: string) => {
        dispatch(updateList(id, value));
    }

    const handleArchiveList = () => {
        dispatch(archiveList(id, true));
    }

    const cardMovedHandler = (cardId: string) => {
        dispatch(moveCard(cardId, id));
    }

    return (
        <DroppableContainer onDrop={cardMovedHandler}>
            <div className="list-wrapper">
                {list &&
                <div className="list">
                    <div className="list__header">
                        <EditableField
                            value={list.title}
                            renderValue={(value) => <h2>{value}</h2>}
                            onSubmit={handleUpdateList}/>
                        <Button variant="transparent" onClick={() => handleArchiveList()}>
                            <FontAwesomeIcon icon={faArchive}/>
                        </Button>
                    </div>
                    {cards && cards.map((card, index) => {
                        return <DraggableItem key={index} id={card.id}><Card
                            key={index}
                            id={card.id}
                            title={card.title}
                            list={list.title}
                            commentsCount={card.commentsCount}
                            selected={selectedCardId === card.id}
                        /></DraggableItem>
                    })}
                    <div>
                        <AddCard isFirstCard={cards.length === 0} onAddNewCard={addNewCardHandler}/>
                    </div>
                </div>}
            </div>
        </DroppableContainer>
    )
}

export default List;
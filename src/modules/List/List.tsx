import React from "react";
import AddCard from "../Card/components/AddCard";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { listArchived, ListsState, listUpdated } from "../../store/reducers/lists";
import { cardAdded, CardsState } from "../../store/reducers/cards";
import EditableField from "../../components/EditableField";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

interface ListProps {
    id: number
}

const List: React.FC<ListProps> = ({ id }) => {
    const dispatch = useDispatch();

    const list = useSelector((state: ListsState) => {
        return state.lists.find(list => list.id === id)
    })

    const cards = useSelector((state: CardsState) => {
        return state.cards.filter(card => card.listId === id);
    })

    const addNewCardHandler = (title: string) => {
        dispatch(cardAdded({
            title,
            listId: id
        }))
    }

    const handleUpdateList = (value: string) => {
        dispatch(listUpdated({ id, title: value }));
    }

    const handleArchiveList = () => {
        dispatch(listArchived({ id }));
    }

    return (
        <div className="list-wrapper">
            {list &&
            <div className="list">
                <div className="list__header">
                    <EditableField
                        value={list.title}
                        renderValue={(value) => <h2>{value}</h2>}
                        onSubmit={handleUpdateList} />
                    <Button variant="transparent" onClick={() => handleArchiveList()}>
                        <FontAwesomeIcon icon={faArchive}/>
                    </Button>
                </div>
                {cards && cards.map((card, index) => {
                    return <Card
                        key={index}
                        title={card.title}
                        list={list.title}
                        id={card.id}/>
                })}
                <div>
                    <AddCard isFirstCard={cards.length === 0} onAddNewCard={addNewCardHandler}/>
                </div>
            </div>}
        </div>
    )
}

export default List;
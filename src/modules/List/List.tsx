import React, { useState } from "react";
import AddCard from "../Card/components/AddCard";
import Card, { CardProps } from "../Card";

interface ListProps {
    listTitle: string
}

const List: React.FC<ListProps> = ({ listTitle }) => {
    const [cards, setCards] = useState<CardProps[]>([])

    const addNewCardHandler = (title: string) => {
        setCards([...cards, { title, list: listTitle }])
    }

    return (
        <div className="list-wrapper">
            <div className="list">
                <div className="list__header">
                    <h2>{listTitle}</h2>
                </div>
                {cards && cards.map((card, index) => {
                    return <Card key={index} title={card.title}  list={listTitle} />
                })}
                <div>
                    <AddCard isFirstCard={cards.length === 0} onAddNewCard={addNewCardHandler}/>
                </div>
            </div>
        </div>
    )
}

export default List;
import React, { useState } from "react";
import AddCard from "../Card/components/AddCard";
import Card, { CardProps } from "../Card";

interface ListProps {
    title: string
}

const List: React.FC<ListProps> = ({ title }) => {
    const [cards, setCards] = useState<CardProps[]>([])

    const addNewCardHandler = (title: string) => {
        setCards([...cards, { title }])
    }

    return (
        <div className="list-wrapper">
            <div className="list">
                <div className="list__header">
                    <h2>{title}</h2>
                </div>
                {cards && cards.map((card, index) => {
                    return <Card key={index} title={card.title} />
                })}
                <div>
                    <AddCard onAddNewCard={addNewCardHandler}/>
                </div>
            </div>
        </div>
    )
}

export default List;
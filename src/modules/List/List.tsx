import React, { useState } from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Textarea from "../../components/Textarea";
import classNames from "classnames";

type Card = {
    text: string
}

interface ListProps {
    title: string
}

const List: React.FC<ListProps> = ({ title }) => {
    const [show, setShow] = useState(false);
    const [card, setCard] = useState('');
    const [showNewCard, setShowNewCard] = useState(false);
    const [cards, setCards] = useState<Card[]>([])

    const cardTextHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setCard(value);
    }

    const addNewCardHandler = () => {
        console.log('list', cards);
        setShowNewCard(true);
        setCards([...cards, { text: card}])
        setCard('');
    }

    const newCardClasses = classNames(
        'card',
        showNewCard && 'list--added'
    )

    const addNewClasses = classNames(
        showNewCard && 'list--add'
    )

    return (
        <div className="list-wrapper">
            <div className="list">
                <div className="list__header">
                    <h2>{title}</h2>
                </div>
                <div className={addNewClasses}>
                    {!show && cards.length === 0 && <div className="list__link">
                        <a onClick={() => setShow(true)}>
                            <span>+ Add a card</span>
                        </a>
                    </div>}
                    {!show && cards.length > 0 && <div className="list__link">
                        <a onClick={() => setShow(true)}>
                            <span>+ Add another card</span>
                        </a>
                    </div>}
                    {show && <div className="list__textarea">
                        <Textarea
                            value={card}
                            onChange={(event) => cardTextHandler(event)}
                            placeholder={"Enter a title for this card…"}/>
                        <div className="new-list__btn">
                            <Button
                                variant="primary"
                                onClick={() => addNewCardHandler()}>Add card
                            </Button>
                            <Button onClick={() => setShow(false)}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                        </div>
                    </div>}
                </div>
                {showNewCard && cards.map((card, index) => {
                    return <div key={index} className={newCardClasses}>
                        {card.text}
                    </div>
                    })
                }
            </div>
        </div>
    )
}

export default List;
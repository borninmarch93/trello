import React, { useState } from "react";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const List: React.FC = () => {
    const [show, setShow] = useState(false);

    const addNewList = () => {
        return console.log('x');
    }

    return (
        <div className="list-wrapper">
            <div className="list">
                <div className="list__header">
                    <h2>Title</h2>
                </div>
                {!show && <div className="list__link">
                    <a onClick={() => setShow(true)}>
                        <span>+ Add a card</span>
                    </a>
                </div>}
                {show && <div className="list__textarea">
                    <textarea placeholder="Enter a title for this card…"/>
                    <div className="new-list__btn">
                        <Button
                            variant="primary"
                            onClick={() => addNewList()}>Add list</Button>
                        <Button onClick={() => setShow(false)}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default List;
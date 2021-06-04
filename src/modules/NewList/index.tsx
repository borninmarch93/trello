import Button from "../../components/Button";
import React, { useState } from "react";
import Input from "../../components/Input";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const NewList: React.FC = () => {
    const [show, setShow] = useState(false);
    const [newList, setNewList] = useState('');

    const textHandler = (event: { target: { value: any; }; }) => {
        const value = event.target.value;
        setNewList(value);
    }

    const addNewList = () => {
        console.log('list', newList);
        setNewList('');
    }

    return (
        <div className="list-wrapper">
            {!show && <a onClick={() => setShow(true)}>
                <div className="new-list">
                    + Add another list
                </div>
            </a>}
            {show && <div className="new-list__input">
                <Input
                    value={newList}
                    onChange={textHandler}
                    placeholder="Enter list title..."
                    type="text"/>
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
    )
}

export default NewList;
import React, { useState } from "react";
import EnterListTitle from "../EnterListTitle";
import AddAnotherList from "../AddAnotherList";

interface AddListProps {
    onAddNewList: (title: string) => void
}

const AddList: React.FC<AddListProps> = ({ onAddNewList }) => {
    const [active, setActive] = useState(true);

    const closeHandler = () => {
        setActive(false);
    }

    const openHandler = () => {
        setActive(true);
    }

    return (
        <React.Fragment>
            {active && <EnterListTitle
                onAddNewList={onAddNewList}
                onClose={closeHandler}/>}
            {!active && <AddAnotherList onClick={openHandler} />}
        </React.Fragment>
    )
}

export default AddList;
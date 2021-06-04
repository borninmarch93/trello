import Button from "../../components/Button";
import React from "react";

const NewList: React.FC = () => {
    return (
        <div className="list__wrapper">
            <div className="list--new">
                <a>+ Add another list</a>
            </div>
            <div className="list__form board__list">
                <input />
                <div>
                    <Button>Add list</Button>
                    <Button>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default NewList;
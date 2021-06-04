import React from "react";

const List: React.FC = () => {
    return (
        <div className="list__wrapper">
            <div className="board__list">
                <div className="list__header">
                    <h2>Title</h2>
                </div>
                <div className="list__link">
                    <a>
                        <span>+ Add a card</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default List;
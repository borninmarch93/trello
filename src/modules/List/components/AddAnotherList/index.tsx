import React from "react";

interface AddAnotherListProps {
    onClick: () => void
}

const AddAnotherList: React.FC<AddAnotherListProps> = ({ onClick }) => {
    return (
        <div className="list-wrapper">
             <a onClick={onClick}>
                <div className="new-list">
                    + Add another list
                </div>
            </a>
        </div>
    )
}

export default AddAnotherList;
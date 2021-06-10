import React, { DragEvent } from "react";

interface DroppableContainerProps {
    onDrop: (draggableItemId: string) => void
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({ onDrop, children}) => {

    const dragOverHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        const id = e.dataTransfer.getData('id');
        onDrop(id);
    }

    return (
        <div
            onDragOver={dragOverHandler}
            onDrop={(e) => dropHandler(e)}>
            {children}
        </div>);
}

export default DroppableContainer;
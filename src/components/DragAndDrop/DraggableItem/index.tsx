import React, { DragEvent } from "react";

interface DraggableItemProps {
    id: string
}

const DraggableItem: React.FC<DraggableItemProps> = ({id, children}) => {

    const dragStartHandler = (e: DragEvent<HTMLDivElement>, id: string) => {
        console.log('drag start', id);
        e.dataTransfer.setData('id', id);
    }

    return (
        <div draggable onDragStart={(e: DragEvent<HTMLDivElement>) => dragStartHandler(e, id)}>
        {children}
    </div>);
}

export default DraggableItem;
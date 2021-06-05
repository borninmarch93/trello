import React from "react";

export interface CardProps {
    title: string
}

const Card: React.FC<CardProps> = ({ title }) => {

    return (
        <div className='card'>
            {title}
        </div>
    )
}

export default Card;
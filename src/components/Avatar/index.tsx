import React from "react";

interface AvatarProps {
    username: string
}

const Avatar: React.FC<AvatarProps> = ({ username }) => {
    return (
        <div className="avatar">
            <span>{username}</span>
        </div>
    )
}

export default Avatar;
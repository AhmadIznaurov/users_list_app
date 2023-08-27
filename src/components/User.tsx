import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface UserProps {
    user: {
        id: number
        name: string
        email: string
    }
}

export const User: React.FC<UserProps> = ({user}: UserProps) => {
    const selectedUserId = useTypedSelector((state) => state.users.selectedUserId);
    const [isSelected, setIsSelected] = useState<boolean>(selectedUserId === user.id);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <li className={isSelected ? 'selected' : ''} onClick={handleClick}>
            <Link to={`/${user.id}`}>
                <div className='user_name'>
                    {user.name}
                </div>
            </Link>
            <div className='user_email'>
                {user.email}
            </div>
        </li>
    );
}
import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const User = ({user}) =>  {
    const selectedUserId = useSelector((state) => state.users.selectedUserId)

    const isSelected = selectedUserId === user.id;

    return (
        <li  className={isSelected ? 'selected' : ''}>
            <Link to={`/${user.id}`}>
                <div className="user-name">
                    {user.name}
                </div>
                <div className="user-email">
                    {user.email}
                </div>
            </Link>
        </li>
    );
}


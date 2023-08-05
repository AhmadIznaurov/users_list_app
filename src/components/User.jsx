import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import styles from './Users.module.css'

export const User = ({user}) =>  {
    const selectedUserId = useSelector((state) => state.users.selectedUserId)

    const isSelected = selectedUserId === user.id;

    return (
        <li  className={isSelected ? 'selected' : ''}>
            <Link to={`/${user.id}`}>
                <div className={styles.user_name}>
                    {user.name}
                </div>
            </Link>
            <div className={styles.user_email}>
                {user.email}
            </div>
        </li>
    );
}


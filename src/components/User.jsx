import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectId} from "../Redux/action";

export const User = ({user}) =>  {
    const dispatch = useDispatch();
    const selectedUserId = useSelector((state) => state.users.selectedUserId)


    const selectUserId = () => {
        dispatch(selectId(user.id));
    }

    const isSelected = selectedUserId === user.id;

    return (
        <li onClick={selectUserId} className={isSelected ? 'selected' : ''}>
            <div className="user-name">
                {user.name}
            </div>
            <div className="user-email">
                {user.email}
            </div>
        </li>
    );
}


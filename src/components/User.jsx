import React from 'react';
import {useDispatch} from "react-redux";
import {selectId} from "../Redux/action";

export const User = ({user}) =>  {
    const dispatch = useDispatch();

    const selectUserId = () => {
        dispatch(selectId(user.id))
    }

    return (
        selectUserId ? <li onClick={selectUserId} class='selected'>
            <div className="user-name">
                {user.name}
            </div>
            <div className="user-email">
                {user.email}
            </div>
        </li> : (
            ''
            )

    );
}


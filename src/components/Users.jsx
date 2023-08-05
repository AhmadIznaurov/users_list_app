import React from 'react';
import {useSelector} from "react-redux";
import {User} from "./User";
import styles from './Users.module.css'

export const Users = (props) => {
    const users = useSelector((state) => state.users.users)

    return (
        <div className={styles.users}>
          <ul>
              {
                  users.map((user) => {
                      return <User user={user} key={user.id} />
                  })
              }
          </ul>
        </div>
    );
}


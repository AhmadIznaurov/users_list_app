import React from 'react';
import {User} from "./User";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface UserTypes {
    id: number
    name: string
    email: string
    key: number
}

export const Users: React.FC = () => {
    const users = useTypedSelector((state) => state.users.users)

    return (
        <div className='users'>
          <ul>
              {
                  users.map((user: UserTypes) => {
                      return <User user={user} key={user.id} />
                  })
              }
          </ul>
        </div>
    );
}


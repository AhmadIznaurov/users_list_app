import React from 'react';

type TodoProps = {
    todo: {
        title: string
    }
}

export const Todo = ({todo}: TodoProps) => {
    return (
        <li>
            {todo.title}
        </li>
    );
}


import React from 'react';

const initialState = {
    users: [],
    todos: [],

    selectedUserId: null,
    filter: '',

    loadingUsers: false,
    loadingTodos: false

}

export  const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'load/users/start':
            return {
                ...state,
                loadingUsers: true
            }
        case 'load/users/success':
            return {
                ...state,
                loadingUsers: false,
                users: action.payload
            }

        case 'load/todos/start':
            return {
                ...state,
                loadingTodos: true
            }

        case 'load/todos/success':
            return {
                ...state,
                loadingTodos: false,
                todos: action.payload
            }
        case 'select/userId':
            return {
                ...state,
                selectedUserId: action.payload
            }

        case 'filter/text':
            return  {
                ...state,
                filter: action.payload
            }

        default:
            return state


    }
}


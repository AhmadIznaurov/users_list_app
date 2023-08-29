import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './todos/TodoSlice';
import UserReducer from './users/UserSlice';

export const store = configureStore({
    reducer: {
        todos: TodoReducer,
        users: UserReducer
    },
})
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {todos} from "./todos/todos";
import {users} from "./users/users";



const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    users: users,
    todos: todos,
})

export const store = createStore(rootState, applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof  store.getState>

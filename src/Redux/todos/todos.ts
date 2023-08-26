import {AllActions, initialStateTodos, TodoActionType} from "../../types/types";

const initialState: initialStateTodos = {
    todos: [],
    filter: '',
    loadingTodos: false
}

export  const todos = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case  TodoActionType.FETCH_TODOS:
            return {
                ...state,
                loadingTodos: true
            }

        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loadingTodos: false,
                todos: action.payload
            }
        case TodoActionType.FETCH_FILTER_TEXT:
            return  {
                ...state,
                filter: action.payload
            }

        default:
            return state


    }
}

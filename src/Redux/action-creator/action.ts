import {Dispatch} from "redux";
import {AllActions, TodoActionType} from "../../types/types";

export const loadUsers = () => {
   return (dispatch: Dispatch<AllActions>): void => {
       dispatch({type: TodoActionType.FETCH_USERS})

       fetch('https://jsonplaceholder.typicode.com/users')
           .then((response) => response.json())
           .then((data) => {
               dispatch({
                   type: TodoActionType.FETCH_USERS_SUCCESS,
                   payload: data
               });
           })
   }

}



export const loadTodos = () => {
    return (dispatch: Dispatch<AllActions>): void => {
        dispatch({type:  TodoActionType.FETCH_TODOS})

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: TodoActionType.FETCH_TODOS_SUCCESS,
                    payload: data
                });
            })
    }

}

export const selectId = (userId: number) => {
    return {
        type: TodoActionType.FETCH_SELECT_ID,
        payload: userId
    }
}


export  const setFilteredText = (text: string) => {
    return {
       type: TodoActionType.FETCH_FILTER_TEXT,
        payload: text
    }
}

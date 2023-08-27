export interface initialStateUsers {
    users: any[]
    loadingUsers: boolean
    selectedUserId: number | null
}

export interface initialStateTodos {
    todos: any[]
    loadingTodos: boolean
    filter: string
}


export enum TodoActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_FILTER_TEXT = 'FETCH_FILTER_TEXT',
    FETCH_SELECT_ID = 'FETCH_SELECT_ID'
}

interface FetchUsersAction {
 type: TodoActionType.FETCH_USERS
}

interface FetchUsersSuccessAction {
   type: TodoActionType.FETCH_USERS_SUCCESS
    payload: any[]
}

interface FetchTodosAction {
   type: TodoActionType.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS
    payload: any[]
}

interface FetchFilterTextAction {
    type: TodoActionType.FETCH_FILTER_TEXT
    payload: string
}

interface FetchSelectIdAction {
    type: TodoActionType.FETCH_SELECT_ID
    payload: number
}


export type AllActions =
    FetchUsersAction
    | FetchUsersSuccessAction
    | FetchTodosAction
    | FetchTodosSuccessAction
    | FetchFilterTextAction
    | FetchSelectIdAction

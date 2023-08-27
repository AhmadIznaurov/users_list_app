import {AllActions, initialStateUsers, TodoActionType} from "../../types/types";

const initialState: initialStateUsers = {
    users: [],
    loadingUsers: false,
    selectedUserId: 0
}

export const users = (state = initialState, action: AllActions) => {
    switch (action.type) {
        case TodoActionType.FETCH_USERS:
            return {
                ...state,
                loadingUsers: true
            }
        case TodoActionType.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loadingUsers: false,
                users: action.payload
            }
        case TodoActionType.FETCH_SELECT_ID:
            return {
                ...state,
                selectedUserId: action.payload
            }
        default:
            return state;
    }
}
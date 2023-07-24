const initialState = {
    users: [],
    selectedUserId: null,
    loadingUsers: false,
}

export const users = (state = initialState, action) => {
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
        case 'select/userId':
            return {
                ...state,
                selectedUserId: action.payload
            }
        default:
            return state;
    }
}
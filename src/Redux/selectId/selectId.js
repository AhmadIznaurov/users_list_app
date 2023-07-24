const initialState = {
    selectedUserId: null,
};

export const selectId = (id) => {
    return {
        type: 'SELECT_ID',
        payload: id,
    };
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_ID':
            return {
                ...state,
                selectedUserId: action.payload,
            };
        default:
            return state;
    }
};


const initialState = {
    todos: [],
    filter: '',
    loadingTodos: false
}

export  const todos = (state = initialState, action) => {
    switch (action.type) {
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
        case 'filter/text':
            return  {
                ...state,
                filter: action.payload
            }

        default:
            return state


    }
}

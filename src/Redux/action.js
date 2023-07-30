export const loadUsers = () => {
   return (dispatch) => {
       dispatch({type: 'load/users/start'})

       fetch('https://jsonplaceholder.typicode.com/users')
           .then((response) => response.json())
           .then((data) => {
               dispatch({
                   type: 'load/users/success',
                   payload: data
               });
           })
   }

}



export const loadTodos = () => {
    return (dispatch) => {
        dispatch({type: 'load/todos/start'})

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'load/todos/success',
                    payload: data
                });
            })
    }

}

export const selectId = (userId) => {
    return {
        type: 'select/userId',
        payload: userId
    }
}


export  const setFilteredText = (text) => {
    return {
       type: 'filter/text',
        payload: text
    }
}

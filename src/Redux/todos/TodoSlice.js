import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  filtered: '',
  loadingTodos: false
}

export const loadTodos = createAsyncThunk(
  'FETCH_TODOS',
     async () => {
       const response = await  fetch('https://jsonplaceholder.typicode.com/todos')
       return response.json()
     }
)

export  const setFilteredText = createAsyncThunk(
  'FETCH_FILTERED_TEXT',
  async ({text}) => {
    return {
      text
    }
  }
)
//  = (text) => {
//   return {
//     type: 'filter/text',
//     payload: text
//   }
// }


export const TodoSlice = createSlice({
 name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTodos.pending, (state) => {
        state.loadingTodos = true
    })
      .addCase(loadTodos.fulfilled, (state, action) => {
        state.loadingTodos = false
        state.todos = action.payload
      })
      .addCase(setFilteredText.fulfilled, (state, action) => {
        state.filtered = action.payload.text
      })
  }
})


export default TodoSlice.reducer
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./Todo";
import {setFilteredText} from "../Redux/action";

export const Todos = (props) => {
    const todos = useSelector((state) => state.todos)
    const selectUserId = useSelector((state) => state.selectedUserId)
    const filter = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const filteredTodos = todos
        .filter(todo => todo.userId === selectUserId)
        .filter(todo => todo.title.indexOf(filter) > -1)


    if (selectUserId === null) {
        return (
            <div className="no_selected_user">
               <span>←</span> Выберите пользователя
            </div>
        )
    }

    const handleChangeTextFilter = (event) => {
        dispatch(setFilteredText(event.target.value))
    }

    return (
        <div className="todos">
            <div className="filter">
                <input
                    type="text"
                    placeholder="Поиск по тексту...."
                    value={filter}
                    onChange={handleChangeTextFilter}
                />
            </div>
            <ul>
                {
                    filteredTodos.map((todo) => {
                     return <Todo todo={todo} key={todo.id}/>
                 })
                }
            </ul>
        </div>
    );
}


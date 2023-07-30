import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./Todo";
import {setFilteredText} from "../Redux/action";
import {useParams} from "react-router-dom";

export const Todos = (props) => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector((state) => state.todos.filter)
    const  id  = parseInt(useParams().id)
    const dispatch = useDispatch()
    const filteredTodos = todos
        .filter(todo => todo.userId === id)
        .filter(todo => todo.title.indexOf(filter) > -1)


    if (isNaN(id)) {
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


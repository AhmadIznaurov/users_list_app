import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./Todo";
import {setFilteredText} from "../Redux/action";
import {useParams} from "react-router-dom";
import styles from './Todos.module.css'




export const Todos = (props) => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector((state) => state.todos.filter)
    const  id  = parseInt(useParams().id)
    const dispatch = useDispatch()
    const filteredTodos = todos
        .filter(todo => todo.userId === id)
        .filter(todo => todo.title.indexOf(filter) > -1)


    if (!id) { // The changing was here instead isNaN(id) add !id
        return (
            <div className={styles.no_selected_user}>
               <span>←</span> Выберите пользователя
            </div>
        )
    }

    const handleChangeTextFilter = (event) => {
        dispatch(setFilteredText(event.target.value))
    }

    return (
        <div className={styles.todos}>
            <div className={styles.filter}>
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


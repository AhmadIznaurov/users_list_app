import React, {ChangeEvent} from 'react';
import {Todo} from "./Todo";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


interface TodosTypes {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const Todos: React.FC = () => {
    const todos = useTypedSelector((state) => state.todos.todos)
    const filter = useTypedSelector((state) => state.todos.filter)
    const  id: number  = parseInt(useParams().id as string)
    const {setFilteredText} = useActions()
    const filteredTodos = todos
        .filter((todo: TodosTypes) => todo.userId === id)
        .filter((todo: TodosTypes) => todo.title.indexOf(filter) > -1)


    if (!id) {
        return (
            <div className='no_selected_user'>
               <span>←</span> Выберите пользователя
            </div>
        )
    }

    const handleChangeTextFilter = (event: ChangeEvent<HTMLInputElement>): void => {
       setFilteredText(event.target.value)
    }

    return (
        <div className='todos'>
            <div className='filter'>
                <input
                    type="text"
                    placeholder="Поиск по тексту...."
                    value={filter}
                    onChange={handleChangeTextFilter}
                />
            </div>
            <ul>
                {
                    filteredTodos !== undefined ? filteredTodos.map((todo: TodosTypes) => {
                     return <Todo todo={todo} key={todo.id}/>
                 }) : null
                }
            </ul>
        </div>
    );
}

// 46:00 m another decision for if
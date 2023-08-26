import '../index.css';
import {Users} from "./Users";
import {Todos} from "./Todos";
import  React, {useEffect} from "react";
import ReactLoading from "react-loading";
import {Route, Routes} from "react-router-dom";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";



export const App: React.FC = () => {
    const loadingUsers = useTypedSelector((state) => state.users.loadingUsers)
    const loadingTodos = useTypedSelector((state) => state.todos.loadingTodos)
    const {loadTodos, loadUsers} = useActions()

    useEffect(() => {
        loadUsers()
        loadTodos()
    }, [])

    if (loadingUsers || loadingTodos) {
        return (
            <div className='ReactLoading'>
                <ReactLoading
                    type={"spokes"}
                    color={"red"}
                    height={200}
                    width={200}
                />
            </div>
        )
    }
  return (
      <div className="container">
          <Users/>

          <Routes>
              <Route
                  path='/:id?'
                  element={<Todos/>}/>
          </Routes>

      </div>
  );
}



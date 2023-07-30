import '../index.css';
import {Users} from "./Users";
import {Todos} from "./Todos";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { loadTodos, loadUsers} from "../Redux/action";
import ReactLoading from "react-loading";
import {Route, Routes} from "react-router-dom";



export const App = () => {
    const dispatch = useDispatch();
    const loadingUsers = useSelector((state) => state.users.loadingUsers)
    const loadingTodos = useSelector((state) => state.todos.loadingTodos)

    useEffect(() => {
        dispatch(loadUsers())
        dispatch(loadTodos())
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



import '../index.css';
import {Users} from "./Users";
import {Todos} from "./Todos";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { loadTodos, loadUsers} from "../Redux/action";

export const App = () => {
    const dispatch = useDispatch();
    const loadingUsers = useSelector((state) => state.loadingUsers)
    const loadingTodos = useSelector((state) => state.loadingTodos)

    useEffect(() => {
        dispatch(loadUsers())
        dispatch(loadTodos())
    }, [])

    if (loadingUsers || loadingTodos) {
        return (
            <div>
                Идет загрузка данных...
            </div>
        )
    }
  return (
      <div className="container">
          <Users/>
          <Todos/>
      </div>
  );
}



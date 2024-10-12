import React, {FC, useState} from 'react';
import './App.css';
import Users from "./comonents/users/users";
import {IUser} from "./models/IUser";
import {ITodo} from "./models/ITodo";
import {getTodosOfUser} from "./services/api.service";


const App:FC=()=> {
  // const [user, setUser] = useState<IUser | null>(null)
  const [todos, setTodos] = useState<ITodo[]>([])

  const lift =(user:IUser)=> {

getTodosOfUser(user)
    .then((response:ITodo[]) =>{
     setTodos(response)
    })
  }
  return (
    <div>
      <hr/>
      {
        todos.map(todo => <div key={todo.id}>{todo.title}</div>)
      }
      <hr/>
        {
            <Users lift={lift}/>
        }
    </div>
  );
}

export default App;

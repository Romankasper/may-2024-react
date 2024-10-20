import React, {FC, } from 'react';
import {ITodo} from "../models/ITodo";
type TodosProps ={
    todos:ITodo[]
}
const Todos:FC<TodosProps> = ({todos}) => {
    return (
        <div>
            {
                todos.map((item)=>(<div key={item.id}>{item.todo}</div>))
            }
            </div>
    );
};

export default Todos;
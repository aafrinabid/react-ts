import React,{useContext} from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import { TodoContext } from '../store/todos-context';
import classes from './Todos.module.css';
const Todos:React.FC=() =>{
  const todosCtx=useContext(TodoContext);
  return (
    <div>
        <ul className={classes.todos}>
{todosCtx.items.map(item=><TodoItem key={item.id} text={item.text} name={item.author} removeTodo={todosCtx.removeTodo.bind(null,item.id)}/>)}

        </ul>
        </div>
  )
}

export default Todos
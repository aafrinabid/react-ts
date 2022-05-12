import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem:React.FC<{text:string,name:string,removeTodo:(event:React.MouseEvent)=>void}>=(props)=> {
  return (
    <li className={classes.item}> {props.text} by {props.name} <button onClick={props.removeTodo}>remove Todo</button> </li>
  )
}

export default TodoItem
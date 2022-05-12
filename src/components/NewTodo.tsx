import React,{useRef} from 'react';
import Todo from '../models/todo';

const NewTodo:React.FC<{todos:any,setTodos:any}>=(props)=>{
    const todoTextInputRef=useRef<HTMLInputElement>(null);
    const nameInputRef=useRef<HTMLInputElement>(null)

const submitHandler=(event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText=todoTextInputRef.current!.value;
    const enteredName=todoTextInputRef.current!.value;

    if(enteredText.trim().length===0||enteredName.trim().length===0){
        return
    }
    props.setTodos([...props.todos,new Todo(enteredText,enteredName)])
    todoTextInputRef.current!.value='';
    nameInputRef.current!.value='';
}

  return (
    <form onSubmit={submitHandler}>
        <label htmlFor='text'>Todo Text</label> 
        <input type='text' id='text' ref={todoTextInputRef} />
        <label htmlFor='name'>Name</label> 
        <input type='text' id='name' ref={nameInputRef} />
        <button>Add Todo</button>
        </form>
  )
}

export default NewTodo
import React,{useRef} from 'react';
import classes from './NewTodo.module.css'
const NewTodo:React.FC<{add:(text:string,name:string)=>void}>=(props)=>{
    const todoTextInputRef=useRef<HTMLInputElement>(null);
    const nameInputRef=useRef<HTMLInputElement>(null)

const submitHandler=(event:React.FormEvent)=>{
    event.preventDefault();
    const enteredText=todoTextInputRef.current!.value;
    const enteredName=nameInputRef.current!.value;

    if(enteredText.trim().length===0||enteredName.trim().length===0){
        return
    }
    
    // props.setTodos([...props.todos,new Todo(enteredText,enteredName)])
    props.add(enteredText,enteredName)
    todoTextInputRef.current!.value='';
    nameInputRef.current!.value='';
}

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='text'>Todo Text</label> 
        <input type='text' id='text' ref={todoTextInputRef} />
        <label htmlFor='name'>Name</label> 
        <input type='text' id='name' ref={nameInputRef} />
        <button>Add Todo</button>
        </form>
  )
}

export default NewTodo
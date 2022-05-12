import React,{useState} from 'react';
import Todo from '../models/todo' ;
type TodoContextObj={
    items:Todo[];
    addTodo:(text:string,name:string)=>void;
    removeTodo:(id:string)=>void;
}

export const TodoContext=React.createContext<TodoContextObj>({
    items:[],
    addTodo:()=>{},
    removeTodo:(id:string)=>{}
}); 

const TodoContextProvider:React.FC<{children:any}>=(props)=>{
    const [todos,setTodos]=useState<Todo[]>([new Todo('coldplay','babu'),new Todo('save your tears for another night','dady')]);
    console.log(todos);
    const addToItem=(text:string,name:string)=>{
      setTodos([...todos,new Todo(text,name)])
    };
    const removeTodo=(id:string)=>{
     setTodos(todos.filter(todo=>todo.id!==id))    
    };
    const contextValue:TodoContextObj={
        items:todos,
        addTodo:addToItem,
        removeTodo:removeTodo,
    };
    return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>

}

export default TodoContextProvider;
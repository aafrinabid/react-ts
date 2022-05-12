import React,{useState} from 'react';
import { text } from 'stream/consumers';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {
  const [todos,setTodos]=useState<Todo[]>([new Todo('coldplay','babu'),new Todo('save your tears for another night','dady')]);
  console.log(todos);
  const addToItem=(text:string,name:string)=>{
    setTodos([...todos,new Todo(text,name)])
  };
  const removeTodo=(id:string)=>{
   setTodos(todos.filter(todo=>todo.id!==id))    
  }
  return (
    <div >
      <NewTodo add={addToItem}/>
      <Todos items={todos} remove={removeTodo}/>
     
    </div>
  );
}

export default App;

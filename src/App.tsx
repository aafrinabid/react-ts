import React,{useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {
  const [todos,setTodos]=useState([new Todo('coldplay','babu'),new Todo('save your tears for another night','dady')]);
  console.log(todos);
  
  return (
    <div >
      <NewTodo setTodos={setTodos} todos={todos}/>
      <Todos items={todos}/>
     
    </div>
  );
}

export default App;

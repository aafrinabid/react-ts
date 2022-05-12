import React,{useState} from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodoContextProvider from './store/todos-context';
function App() {
  return (
    <div >
      <TodoContextProvider>
      <NewTodo/>
      <Todos />
      </TodoContextProvider>
    </div>
  );
}

export default App;

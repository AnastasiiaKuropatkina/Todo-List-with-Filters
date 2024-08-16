import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState([{ //or [] - default value
      id:1,
      title: "1. Input and button",
      status: "true"
      },
      {
      id:2,
      title: "2. List of items (unordered list with list items)",
      status: "false"
      },
      {
      id:3,
      title: "3. Filters",
      status: "true"
    },
  ]);
  return (
    <div className="App">
    {/* 1. header */}
        <Header/>
    {/* 2.input (input and button) */}
        <AddTodo todo={todo} setTodo={setTodo}/>
    {/* 3. filters */}
    {/* 4. list of items (unordered list with list items) */}
        <TodoList todo={todo} setTodo={setTodo}/>
    {/* 5. filters, pop-up for delete, localStorage */}
    </div>
  );
}

export default App;

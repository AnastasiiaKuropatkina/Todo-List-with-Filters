import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState([
{ //or [] - default value
      id:1,
      title: "1. Input and button",
      status: false
    },
    {
      id:2,
      title: "2. List of items (unordered list with list items)",
      status: false
    },
    {
      id:3,
      title: "3. Filters",
      status: false
    },
    {
      id:4,
      title: "4. Pop-up for delete",
      status: false
    },
    {
      id:5,
      title: "5. LocalStorage",
      status: true
    },
    {
      id:6,
      title: "6. Empty todo list",
      status: false
    },
    {
      id:7,
      title: "7. Items left and completed todos",
      status: false
    },
    {
      id:8,
      title: "8. Clear all todos",
      status: true
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
        {todo.length > 0 && <TodoList todo={todo} setTodo={setTodo}/>}

    {/* 5. filters, pop-up for delete, localStorage */}
    </div>
  );
}

export default App;

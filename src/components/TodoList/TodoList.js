import React, { useState, useEffect } from 'react';
import './TodoList.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TodoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo);
    }, [todo]);

    // deleteTodo, is responsible for deleting a todo item from the todo list
    function deleteTodo (id) {
        if (window.confirm("The task is about to be removed!")) {
            let newDeleteTodo = [...todo].filter((item) => item.id !== id);
            setTodo(newDeleteTodo);
        }
    }

    // statusTodo, is responsible for changing the status (true or false) of a todo item from the todo list
    function statusTodo(id) {
      let newStatus = [...todo].map((item) => {
        if (item.id === id) {
          return {...item, status: !item.status};
        }
        return item;
      });
      setTodo(newStatus);
    }

    // saveTodo, is responsible for saving the edited todo item from the todo list
    function editTodo (id, title) {
        setEdit(id);
        setValue(title);
    }

    // saveTodo, is responsible for saving the edited todo item from the todo list
    function saveTodo(id) {
        let newTodo = [...todo].map((item) => {
            if(item.id === edit) {
                item.title = value;
            }
            return item;

        })
        setTodo(newTodo);
        setEdit(null);
    }

    // todoFilter, is responsible for filtering the todo list
    function todoFilter(status) {
        console.log('status', status);
        console.log('todo', todo);
        if(status === 'all') {
            setFiltered(todo);
        } else {
            let newTodo = [...todo].filter((item) => item.status === status);
            setFiltered(newTodo);
        }
    }

    return (
      <>

      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={() => todoFilter('all')}>All</Button>
        <Button onClick={() => todoFilter(true)}>Open</Button>
        <Button onClick={() => todoFilter(false)}>Close</Button>
      </ButtonGroup>
    </Box>
    <List className="list" sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
  {
    filtered.map((item) => (
      <ListItem key={item.id}>
        {edit === item.id ?
          <TextField className="item-input" size="small" value={value} onChange={(e) => setValue(e.target.value)} />          :
          <ListItemButton>
            <ListItemIcon>
              <Checkbox
                onChange={() => statusTodo(item.id)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                checked={item.status === false}
              />
            </ListItemIcon>
            <ListItemText className={!item.status ? "close": ""} primary={item.title}/>
            <ButtonGroup>
          <IconButton className="item-icon" edge="end" onClick={() => deleteTodo(item.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton className="item-icon" edge="end" onClick={() => editTodo(item.id, item.title)}>
            <EditIcon />
          </IconButton>
        </ButtonGroup>
          </ListItemButton>
        }
        {
          edit === item.id ?
            <Button variant="contained" edge="end" onClick={() => saveTodo(item.id)}>Save</Button>
            :
            null
        }
      </ListItem>
    ))
  }
</List>
<div className="footer">
    <div className="footer-container">
        <div className="footer-done">Task Done</div>
        <div className="footer-clean">Keep it up!</div>
    </div>
    <div className="footer-container">
        <div className="footer-counter">
            <span className="footer-text">{[...todo].filter((item) => item.status === false).length}</span>
            <span>/</span>
            <span className="footer-text">{todo.length}</span>
        </div>
    </div>
</div>
    <span className="footer-text">{[...todo].filter((item) => item.status === true).length}</span>

      </>
    );
}
export default TodoList;
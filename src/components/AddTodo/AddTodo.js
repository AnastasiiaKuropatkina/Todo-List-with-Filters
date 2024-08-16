import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.css'
function AddTodo({todo, setTodo}) {
  const [value, setValue] = useState('');

function saveTodo() {
  if(value) {
    setTodo([...todo, {
      id: uuidv4(),
        title: value,
        status: true
    }]);
    setValue('');
  } else {
    prompt("Task is empty! You can add a new task");
  }
  }
  return (
    <Box className="input-container"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/*value - the state of the input field*/}
      <TextField id="outlined-basic margin-normal fullWidth" label="What is the task today?" size="small" variant="outlined" value={value} onChange = {(e) => setValue(e.target.value)} />
      <Button variant="contained" onClick={saveTodo}>Add Task</Button>
    </Box>
  );
}
export default AddTodo;
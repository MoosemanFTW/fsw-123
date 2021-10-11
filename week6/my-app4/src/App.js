import React, { useState } from 'react';
import {Data} from "./Data"
// import data from "./data.json";
import ToDo from "./ToDo";
import Header from './Header';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [toDoList, setToDoList ] = useState(Data);
  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] =useState({})

  const handleToggle = (id) => {
    let mapped = toDoList.map(desc => {
      return desc.id === String(id) ? { ...desc, complete: !desc.complete } : { ...desc};
    });
    setToDoList(mapped);
  }


  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: uuidv4(), desc: userInput, complete: false }];
    setToDoList(copy);
  }

  const remove = (id) =>{
    let copy = [...toDoList];
    let fillteredCopy = copy.filter((value) => value.id !== id)
    setToDoList(fillteredCopy)
    };
  
  const handleEditInputChange = (e) =>{
    setCurrentTodo({...currentTodo, desc:e.target.value})
  };

  const handleEditClick = (todo) =>{
    setIsEditing(true)
    setCurrentTodo({...todo})
  }

  

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask}/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} remove={remove} isEditing={isEditing} currentTodo={currentTodo} handleEditInputChange={handleEditInputChange} handleEditClick={handleEditClick} />
      
    </div>
  );
}

export default App;

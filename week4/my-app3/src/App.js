import React, { useState } from 'react';
import {Data} from "./Data"
// import data from "./data.json";
import ToDo from "./ToDo";
import Header from './Header';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [ toDoList, setToDoList ] = useState(Data);

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
    let fillteredCopy = copy.filter((value,index,arr) => value.id !== id)
    setToDoList(fillteredCopy)
    };
    

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} remove={remove} />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;

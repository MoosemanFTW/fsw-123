import React, { useState } from 'react';
import {Data} from "./Data"
// import data from "./data.json";
import ToDo from "./ToDo";
import Header from './Header';
import ToDoList from "./ToDoList";

function App() {
  const [ toDoList, setToDoList ] = useState(Data);


 
 return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList}/>
   </div>
 );
}
 
export default App;

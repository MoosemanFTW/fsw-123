import {list} from './Store'
import Todo from "./Todo";
const App = () => {
  return (
    <Todo list={list} />
  ); 
}

export default App;

import {list} from './Store'
import TodoList from "./TodoList";
const App = () => {
  return (
    <TodoList list={list} />
  ); 
}

export default App;

import ToDoList from "./ToDoList";
import { Remove } from "./Remove";
 
const ToDo = ({todo}) => {
    
   return (
       <div className={todo.complete ? "strike" : ""}>
           <input type="checkbox" id={todo.id} name={todo.desc} value={todo.desc}/>
           {todo.desc}
           <button id = {todo.id} onClick={Remove}>X</button>
       </div>
   );
};
 
export default ToDo;
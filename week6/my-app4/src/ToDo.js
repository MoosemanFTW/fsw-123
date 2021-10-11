
 
const ToDo = ({todo, handleToggle, remove, isEditing, currentTodo, handleEditInputChange, handleEditClick}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const completeTodo = (id) => {
        handleToggle(id)
    }

    const deleteTodo = (id) => {
        remove(id)
    }
    

    return (
        <div key={todo.id}>
            <input type="checkbox" checked={todo.complete} onChange={() => completeTodo(todo.id)} />
            {isEditing ? (
            <div>
            <input type='text'></input>
            <button>update</button>
            </div>
            ):(
            <div id={todo.id} key={todo.id + todo.desc} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                {todo.desc}
            </div>
            )}
            <button value={todo.id} onClick={() => deleteTodo(todo.id)}>X</button>
            <button onClick={() => handleEditClick(todo)}>Edit</button>
        </div>
    );
};

export default ToDo;
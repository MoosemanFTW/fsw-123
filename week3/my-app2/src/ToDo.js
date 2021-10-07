
 
const ToDo = ({todo, handleToggle, remove}) => {

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
        <div>
            <input type="checkbox" checked={todo.complete} onChange={() => completeTodo(todo.id)} />
            <div id={todo.id} key={todo.id + todo.desc} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                {todo.desc}
            </div>
            <button value={todo.id} onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
};

export default ToDo;
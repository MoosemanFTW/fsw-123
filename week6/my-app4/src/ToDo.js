import { useState } from "react";
 
const ToDo = ({todo, handleToggle, remove, isEditing, currentTodo, handleEditInputChange, handleEditClick, editTodo}) => {

    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(todo.desc)
    const [empty, setEmpty] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const toggleEdit = () => {
        setEdit(!edit)
        setText(todo.desc)
    }

    const handleChange = (e) => {
        (e.target.value === '') ? setEmpty(true) : setEmpty(false)
        setText(e.target.value)
    }

    const completeTodo = (id) => {
        handleToggle(id)
    }

    const deleteTodo = (id) => {
        remove(id)
    }

    const handleEdit = (id, text) => {
        editTodo(id, text)
        toggleEdit()
    }
    

    return (
        <div key={todo.id}>
            <input type="checkbox" checked={todo.complete} onChange={() => completeTodo(todo.id)} />
            {edit ? (
            <div>
            <input type='text' value={text} onChange={handleChange}></input>
            <button onClick={() => handleEdit(todo.id, text)} disabled={empty}>update</button>
            <button onClick={() => toggleEdit()}>Cancel</button>
            </div>
            ):(
            <div id={todo.id} key={todo.id + todo.desc} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                {todo.desc}
                <button value={todo.id} onClick={() => deleteTodo(todo.id)}>X</button>
                <button onClick={() => toggleEdit()} disabled={todo.complete}>Edit</button>
            </div>
            )}
        </div>
    );
};

export default ToDo;
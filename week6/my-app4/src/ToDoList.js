import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter, remove, isEditing, currentTodo, handleEditInputChange, handleEditClick, editTodo}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} remove={remove} isEditing={isEditing} currentTodo={currentTodo} handleEditInputChange={handleEditInputChange} handleEditClick={handleEditClick} editTodo={editTodo} />
                )
            })}
            
        </div>
    );
};

export default ToDoList;
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter, remove, editTodo}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} remove={remove} editTodo={editTodo} />
                )
            })}
            
        </div>
    );
};

export default ToDoList;
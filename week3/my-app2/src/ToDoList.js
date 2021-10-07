import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter, remove}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} remove={remove} />
                )
            })}
            
        </div>
    );
};

export default ToDoList;
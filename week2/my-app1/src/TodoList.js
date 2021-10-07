
const TodoList = ({list}) =>{
    const newList = list.map((item, index) =>{
        return(
            <li key={index}>{item.desc}</li>
        );
    })
    return(
        <ul>{newList}</ul>
    )
}
export default TodoList
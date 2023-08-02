import "./TodoList.css";

const Todo = (props) => {
    return (
        <ul className="todo">
            { props.todoList.map((todo, index) => {
                return (
                    <div className="task" key={ index }>
                        <li> { todo } </li>
                        <input type="checkbox" />
                    </div>
                )
            }) }
        </ul>
    );
}

export default Todo;

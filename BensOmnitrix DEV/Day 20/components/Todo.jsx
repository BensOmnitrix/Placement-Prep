function Todo(props) {
    function deleteHandler(indx){
        const updatedTodo = props.allTodos.filter((todo) => todo.id != indx);
        return updatedTodo;
    }

    return (
        <>
            <div className="todo">
                <div className="title">Title: {props.todo.title}</div>
                <div className="description">Description: {props.todo.description}</div>
                <br />
                <div>
                    <span className="completed"><button>{props.todo.completed ? "Done!" : "Mark as Done"}</button></span>
                    <span className="delete"><button onClick={() => {
                        props.setTodo(deleteHandler(props.todo.id));
                    }}>Delete</button></span>
                </div>
                <br />
            </div>
        </>
    )
}

export default Todo

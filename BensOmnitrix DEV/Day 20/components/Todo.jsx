function Todo(props) {
  function deleteHandler(id) {
    const updatedTodo = props.allTodos.filter((todo) => todo.id != id);
    props.setTodo(updatedTodo);
  }

  function DoneHandler(id) {
    const updatedTodo = props.allTodos.map((todo) => {
      if (todo.id == id) {
        return { ...props.todo, completed: !props.todo.completed };
      }
      return props.todo;
    });
    props.setTodo(updatedTodo);
  }

  return (
    <>
      <div className="todo">
        <div className="title">Title: {props.todo.title}</div>
        <div className="description">Description: {props.todo.description}</div>
        <br />
        <div>
          <span className="completed">
            <button
              onClick={() => {
                DoneHandler(props.todo.id);
              }}
            >
              {props.todo.completed ? "Done!" : "Mark as Done"}
            </button>
          </span>
          <span className="delete">
            <button
              onClick={() => {
                deleteHandler(props.todo.id);
              }}
            >
              Delete
            </button>
          </span>
        </div>
        <br />
      </div>
    </>
  );
}

export default Todo;

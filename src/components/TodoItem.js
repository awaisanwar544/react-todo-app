import React from "react";

const TodoItem = ({todo, handleChangeProps, deleteTodoProps}) => {
  return (
    <li>
      <input type="checkbox"
      checked={todo.completed}
      onChange={() => handleChangeProps(todo.id)}
      /> <button onClick={() => deleteTodoProps(todo.id)}>Delete</button> {todo.title}
    </li>
  )
}

export default TodoItem;
import React from "react";

const TodoItem = ({id, todo}) => {
  return (
    <li>{todo.title}</li>
  )
}

export default TodoItem;
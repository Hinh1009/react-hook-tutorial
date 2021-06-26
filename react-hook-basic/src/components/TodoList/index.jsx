import React from "react";

function TodoList(props) {
  const { todos, onClick } = props;

  const handleClick = (todo) => {
    if (onClick) {
      onClick(todo);
    }
  };
  return (
    <div>
      <ul className="todo__list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

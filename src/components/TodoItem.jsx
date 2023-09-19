import React from "react"

function TodoItem({ todo, toggleTodo, handleEdit }) {
  return (
    <div className="flex gap-x-4 items-start">
      <label
        htmlFor={todo.id}
        className={`text-gray-500 flex gap-4 text-lg ${
          todo.isComplete ? "line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={() => toggleTodo(todo.id)}
          className="custom-checkbox shrink-0 mt-[2px]"
          id={todo.id}
        />
        {todo.toDo}
      </label>
      <button className="text-forth" onClick={() => handleEdit(todo.id)}>Edit</button>
    </div>
  )
}

export default TodoItem

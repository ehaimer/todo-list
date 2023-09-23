import React from "react"
import "../TodoListApp.css"
import TodoItem from "./TodoItem"

const TodoList = ({ todoList, toggleTodo, handleEdit }) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList

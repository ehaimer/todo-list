import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import TodoListApp from "./TodoListApp"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <TodoListApp />
  </React.StrictMode>
)

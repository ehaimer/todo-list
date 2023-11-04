import "./TodoListApp.css"
import { useRef, useState, useEffect } from "react"
import Button from "./components/Button"
import TodoList from "./components/TodoList"
import { v4 as uuidv4 } from "uuid"

function TodoListApp() {
  const LOCAL_STORAGE_KEY = "TodoListApp"
  const todoRef = useRef()
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState("")
  const [todoList, setTodoList] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    return storedData || []
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isEdit) {
      const todo = todoRef.current.value
      if (todo === "") return
      setTodoList((prevTodoList) => {
        return [
          ...prevTodoList,
          { id: uuidv4(), toDo: todo, isComplete: false },
        ]
      })
      todoRef.current.value = null
    } else {
      const localTodoList = [...todoList]
      const todo = localTodoList.find((todo) => todo.id === editId)
      todo.toDo = todoRef.current.value
      setTodoList(localTodoList)
      setIsEdit(false)
      todoRef.current.value = null
    }
  }

  const toggleTodo = (id) => {
    const localTodoList = [...todoList]
    const todo = localTodoList.find((todo) => todo.id === id)
    todo.isComplete = !todo.isComplete
    setTodoList(localTodoList)
  }

  const handleEdit = (id) => {
    const localTodoList = [...todoList]
    const todo = localTodoList.find((todo) => todo.id === id)
    todoRef.current.value = todo.toDo
    setEditId(id)
    setIsEdit(true)
  }

  return (
    <main className="flex flex-col  container border mx-auto px-6 py-12 gap-y-8 my-16 rounded-lg drop-shadow-xl bg-white grow max-w-[90vw] lg:max-w-[60vw]">
      <section className="flex flex-col gap-y-8">
        <h1 className="text-primary font-bold text-3xl whitespace-nowrap">
          My To-Do List
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 text-gray-500"
        >
          <input
            type="text"
            ref={todoRef}
            placeholder="Enter your To Do Item"
            className="rounded-full py-2 px-4 drop-shadow-md focus:outline-none min-w-[220px]"
          />
          <div className="flex flex-col gap-4">
            <Button type="submit">{isEdit ? "Edit" : "Add"}</Button>
          </div>
        </form>
      </section>
      <section className="ml-4 flex flex-col gap-y-4">
        <h2 className="text-lg font-bold text-primary whitespace-nowrap">
          {todoList.filter((todo) => !todo.isComplete).length} Left Todo
        </h2>
        <TodoList
          todoList={todoList}
          toggleTodo={toggleTodo}
          handleEdit={handleEdit}
        />
      </section>
      {todoList.every((todo) => !todo.toDo) || (
        <Button
          type="button"
          action={() =>
            setTodoList(todoList.filter((todo) => !todo.isComplete))
          }
        >
          Clear Completed
        </Button>
      )}
    </main>
  )
}

export default TodoListApp

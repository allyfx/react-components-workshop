import { useState } from "react"

import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { TodoItem } from './components/TodoItem'

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setNewTodo('')
    setTodos([{title: newTodo, done: false}, ...todos]);
  }

  function removeTodo(todo) {
    setTodos(todos.filter((item) => item.title !== todo.title));
  }

  function changeTodoDoneStatus(todo) {
    setTodos(todos.map((item) => {
      if (item.title === todo.title) {
        item.done = !item.done;
      }
      return item;
    }));
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <Input newTodo={newTodo} setNewTodo={setNewTodo} placeholder="Adicionar ToDo" />
            <Button onClick={addTodo}>
              Adicionar
            </Button>
          </div>
        </div>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.title}
              todo={todo}
              changeTodoDoneStatus={changeTodoDoneStatus}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

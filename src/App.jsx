import { useState } from "react"

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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Adicionar ToDo" value={newTodo} onChange={(e) => setNewTodo(e.currentTarget.value)} />
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-slate-200 hover:bg-teal" onClick={addTodo}>
              Adicionar
            </button>
          </div>
        </div>
        <div>
          {todos.map((todo) => (
            <div key={todo.title} className="flex mb-4 items-center">
              <p className={`w-full text-grey-darkest ${todo.done ? 'line-through' : ''}`}>
                {todo.title}
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-slate-200 text-green border-green hover:bg-green" onClick={() => changeTodoDoneStatus(todo)}>
                {todo.done ? 'Desfazer' : 'Feito'}
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-slate-200 hover:bg-red" onClick={() => removeTodo(todo)}>
                Remover
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

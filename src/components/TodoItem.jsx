/* eslint-disable react/prop-types */
import { Button } from "./Button"

export function TodoItem({ todo, changeTodoDoneStatus, removeTodo }) {
  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest ${todo.done ? 'line-through' : ''}`}>
        {todo.title}
      </p>
      <Button onClick={() => changeTodoDoneStatus(todo)}>
        {todo.done ? 'Desfazer' : 'Feito'}
      </Button>
      <Button onClick={() => removeTodo(todo)} additionalClassName="border-red-300 hover:bg-red-300">
        Remover
      </Button>
    </div>
  )
}
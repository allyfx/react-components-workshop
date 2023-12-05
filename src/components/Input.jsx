/* eslint-disable react/prop-types */

export function Input({ newTodo, setNewTodo, ...rest }) {
  return <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" value={newTodo} onChange={(e) => setNewTodo(e.currentTarget.value)} {...rest} />
}

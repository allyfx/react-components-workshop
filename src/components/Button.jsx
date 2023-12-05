/* eslint-disable react/prop-types */

export function Button({ children, additionalClassName = "", ...rest }) {
  return (
    <button className={`flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-slate-200 hover:bg-teal ${additionalClassName}`} {...rest}>
      {children}
    </button>
  )
}
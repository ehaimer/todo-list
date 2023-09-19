import React from "react"

const Button = ({ type, action, children }) => {
  return (
    <button
      type={type}
      onClick={action}
      className="rounded-full bg-forth text-white drop-shadow-md font-medium px-4 py-1.5 focus:outline-none hover:scale-105 focus:scale-105 active:scale-100 whitespace-nowrap w-[175px]"
    >
      {children}
    </button>
  )
}

export default Button

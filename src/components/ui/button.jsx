import React from "react"

const ButtonDark = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className=" focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-black text-white hover:bg-gray-700 hover:border-gray-600"
      {...props}
    >
      {children}
    </button>
  )
}

const ButtonLight = ({ children, ...props }) => {
  return (
    <button
      type="button"
      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      {...props}
    >
      {children}
    </button>
  )
}

export { ButtonDark, ButtonLight }
export default ButtonDark

import React from "react"

export default function PropBox({ children }) {
  return (
    <div className="flex flex-col items-center justify-center pb-3">
      <h3 className="text-center bg-gray-200 text-neutral-950 py-0.5 px-3 rounded-md font-medium">{children}</h3>
    </div>
  )
}

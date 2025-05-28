import React from "react"

const InputBox = ({ id, placeholder, type, label, name, required = false }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <input
        id={id}
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-white border-1 border-neutral-300 py-2 px-2 rounded-md text-sm text-neutral-600"
      />
    </div>
  )
}

const InputText = ({ id, placeholder, label, name }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        className="bg-white border-1 border-neutral-300 py-2 px-4 rounded-md text-base text-neutral-600"
        rows={4}
        name={name}
        id={id}
      ></textarea>
    </div>
  )
}

export { InputBox, InputText }

import React from "react"


const Card = ({icon, title, description}) => {
  return (
      <div className="flex flex-col items-left py-6 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="text-3xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
  )
}

export default Card
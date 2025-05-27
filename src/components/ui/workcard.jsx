import react from 'react'

export default function WorkCard({ icon, title, description }) {
  return (
    <div className='flex flex-col justify-center items-center gap-2 p-6 bg-white rounded-lg outline-1 outline-gray-300 w-64 h-fit text-center'>
      <div className='p-3 rounded-full bg-gray-200'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='text-sm text-natural-200 text-neutral-600'>{description}</p>
    </div>
  )
}
import React from 'react'


const PointCard = ({title, description, icon}) => {
  return ( 
    <div className='h-60 p-3 flex flex-col items-start justify-center gap-4'>
      <div className='w-fit p-4 rounded-full border border-white'>
        {icon}
      </div>
      <h3 className='text-xl font-bold mb-3 text-blue-400'>{title}</h3>
      <p className='text-sm font-sans opacity-70'>{description}</p>
    </div>
  )
}

export default PointCard
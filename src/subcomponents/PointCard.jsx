import React from 'react'


const PointCard = ({title, description, icon}) => {
  return ( 
    <div style={{height: '15rem'}} className='mb-4 p-3 flex flex-col items-start justify-center gap-4'>
      <div className='w-fit p-4 rounded-full border border-white'>
        {icon}
      </div>
      <h3 className='text-heading text-xl font-bold mb-3'>{title}</h3>
      <p className='text-sm font-sans'>{description}</p>
    </div>
  )
}

export default PointCard;
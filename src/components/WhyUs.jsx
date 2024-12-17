import React from 'react'

const WhyUs = () => {
  return (
    <div className='w-full my-10 p-4'>
      <h3 className='mb-10 text-4xl font-bold text-center'>What Sets Us Apart</h3>
      <div className='w-full flex flex-wrap justify-center gap-8 bg-green-500'>
        <div className='flex flex-col justify-start gap-8'>
            <div className='w-72 h-80 bg-red-500 p-10 rounded-xl'>
                Hello i am a div
            </div>
            <div className='w-72 min-h-80 bg-red-500 p-10 rounded-xl'>
                Hello i am a div
            </div>
        </div>
        <div className='flex flex-col justify-end gap-8'>
            <div className='w-72 h-72 bg-red-500 p-10 rounded-xl'>
                Hello i am a div
            </div>
            <div className='w-72 h-72 bg-red-500 p-10 rounded-xl'>
                Hello i am a div
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs;
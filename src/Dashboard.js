import React from 'react'

export default function Dashboard ({ title }) {
  return (
    <div className='bg-blue-base center'>
      <div className='text-5xl text-magenta-bright'>{title}</div>
      <div className='text-green-bright'>Dashboard things...</div>
    </div>
  )
}

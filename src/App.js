import React from 'react'

import planet from './img/planet.svg'
import rocket from './img/rocket.svg'

export default function App () {
  return (
    <div className='font-roboto mt-8 ml-10'>
      <div className='text-3xl'>
        <img src={planet} className='inline-block mb-2 mr-2' />
        <span className='text-white'>Goal</span>
        <span className='text-green-bright ml-1'>App</span>
      </div>
      <div className='text-[5rem] ml-40 mt-16 inline-block'>
        <h1 className='text-white'>Track your Goals</h1>
        <h1 className='text-white text-right italic'>
          <span className='text-green-bright'>with </span>
          <span className='text-magenta-bright'>style.</span>
        </h1>
        <img src={rocket} className='scale-[85%] relative translate-y-[-11rem]' />
      </div>
    </div>
  )
}

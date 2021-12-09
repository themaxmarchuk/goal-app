import React from 'react'

import planet from './img/planet.svg'
import rocket from './img/rocket.svg'
import faRocket from './img/fa-rocket.svg'
import smoke from './img/smoke.svg'

export default function App () {
  return (
    <div className='font-roboto text-white mt-8 ml-10'>
      <div className='text-3xl'>
        <img src={planet} className='inline-block mb-2 mr-2' />
        <span>Goal</span>
        <span className='text-green-bright ml-1'>App</span>
      </div>
      <div className='flex justify-between mt-16'>
        <div className='text-[90px] ml-40 relative inline-block'>
          <h1>Track your Goals</h1>
          <h1 className='text-right italic'>
            <span className='text-green-bright'>with </span>
            <span className='text-magenta-bright'>style.</span>
          </h1>
          <img src={rocket} className='scale-[85%] absolute left-[1.5rem] top-[4.5rem]' />
          <img src={smoke} className=' scale-125 z-[-1] absolute left-[-11rem] bottom-[-11rem]' />
        </div>
        <div className='inline-block text-3xl mr-[8vw] mt-52'>
          <div>
            Visualize your journey.
          </div>
          <div className='bg-blue-base mt-3 w-[47rem] h-[9rem] rounded-md shadow-lg' />
          <div className='mt-24'>
            Progress redefined.<br />
            Based on proven psychological principles.
          </div>
          <div className='mt-12'>
            <button className='group text-xl text-center pb-[11px]'>
              <div className='bg-blue-dark relative button-outlined-top border-blue-light'>
                See More
              </div>
              <div className='peer absolute button-outlined-bottom bg-blue-light shadow-md' />
            </button>
            <button className='group text-xl text-center ml-8 pb-3' >
              <div className='button-flat-top relative bg-magenta-bright'>
                Launch Today <img src={faRocket} className='scale-[85%] ml-[11px]' />
              </div>
              <div className='flex bg-purple-dark shadow-md absolute button-flat-bottom' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

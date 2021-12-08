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
      <div className='flex mt-16'>
        <div className='text-[90px] ml-40 relative inline-block'>
          <h1>Track your Goals</h1>
          <h1 className='text-right italic'>
            <span className='text-green-bright'>with </span>
            <span className='text-magenta-bright'>style.</span>
          </h1>
          <img src={rocket} className='scale-[85%] absolute left-[1.5rem] top-[4.5rem]' />
          <img src={smoke} className=' scale-125 z-[-1] absolute left-[-11rem] bottom-[-11rem]' />
        </div>
        <div className='inline-block text-3xl ml-[11.5rem] mt-52'>
          <div>
           Visualize your journy. 
          </div>
          <div className='bg-blue-base mt-3 w-[47rem] h-[9rem] rounded-md' />
          <div className='mt-24'>
            Progress redifined.<br/>
            Based on proven psychological principles.
          </div>
          <div className='mt-12 flex'>
            <button className='text-xl text-center'>
              <div className='flex border-2 relative bg-blue-dark border-blue-light justify-center z-10 items-center pt-4 pb-4 w-[13.5rem] rounded-[10px]'>
                See More
              </div>
              <div className='flex bg-blue-light relative translate-y-[-49px] z-0 h-[3.75rem] w-[13.5rem] rounded-[10px]'/>
            </button>
            <button className='text-xl text-center ml-8'>
              <div className='flex relative bg-magenta-bright justify-center z-10 items-center pt-4 pb-4 translate-y-[-2px] w-[13.5rem] rounded-[10px]'>
                Launch Today <img src={faRocket} className='scale-[85%] ml-[11px]' />
              </div>
              <div className='flex bg-purple-dark relative translate-y-[-47px] z-0 h-[3.75rem] w-[13.5rem] rounded-[10px]'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

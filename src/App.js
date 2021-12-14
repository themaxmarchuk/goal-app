import React from 'react'

import rocket from './img/rocket.svg'
import faRocket from './img/fa-rocket.svg'
import smoke from './img/smoke.svg'

import RaisedButton from './components/RaisedButton'
import Logo from './components/Logo'

export default function App () {
  return (
    <div className='font-roboto text-white mt-8 ml-10'>
      <Logo />
      <div className='flex justify-between mt-16'>
        <div className='text-[90px] ml-52 relative inline-block'>
          <h1>Track your Goals</h1>
          <h1 className='text-right italic'>
            <span className='text-green-bright'>with </span>
            <span className='text-magenta-bright'>style.</span>
          </h1>
          <img src={rocket} className='scale-[85%] absolute left-[1.5rem] top-[4.5rem]' />
          <img src={smoke} className='z-[-1] fixed left-[-72px] bottom-[-190px]' />
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
            <RaisedButton text='See More' className='test'>
              See More
            </RaisedButton>
            <RaisedButton primary text='Launch Today' icon={faRocket}>
              Launch Today
              <img src={faRocket} className='scale-[85%] ml-[11px]' />
            </RaisedButton>
          </div>
        </div>
      </div>
    </div>
  )
}

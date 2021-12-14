import React from 'react'

import planet from '../img/planet.svg'

export default function Logo () {
  return (
    <div className='text-white text-3xl'>
      <img src={planet} className='inline-block mb-2 mr-2' />
      <span>Goal</span>
      <span className='text-green-bright ml-1'>App</span>
    </div>
  )
}

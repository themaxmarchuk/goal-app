import React from 'react'

export default function RaisedButton ({ primary, children, className }) {
  // primary variant
  if (primary) {
    return (
      <button className={`group text-xl text-center ml-8 pb-3 ${className}`}>
        <div className='button-flat-top relative bg-magenta-bright'>
          {children}
        </div>
        <div className='button-flat-bottom flex bg-purple-dark shadow-md absolute' />
      </button>
    )
  }
  // outlined variant
  return (
    <button className={`group text-xl text-center pb-[11px] ${className}`}>
      <div className='button-outlined-top bg-blue-dark relative border-purple-light'>
        {children}
      </div>
      <div className='button-outlined-bottom absolute bg-purple-light shadow-md' />
    </button>
  )
}

import React from 'react'

// TODO: Add an animation when it gets clicked, to be more "button like"
// can use local state for this

export default function RaisedButton ({ primary, children, className }) {
  if (primary) {
    return (
      <button className={`group text-xl text-center ml-8 pb-3 ${className}`}>
        <div className='button-flat-top relative bg-magenta-bright'>
          {children}
        </div>
        <div className='button-flat-bottom flex bg-purple-dark shadow-md absolute' />
      </button>
    )
  } else {
    return (
      <button className={`group text-xl text-center pb-[11px] ${className}`}>
        <div className='button-outlined-top bg-blue-dark relative border-blue-light'>
          {children}
        </div>
        <div className='button-outlined-bottom peer absolute bg-blue-light shadow-md' />
      </button>
    )
  }
}

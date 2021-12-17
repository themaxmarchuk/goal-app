import React from 'react'

export default function History ({ className }) {
  return (
    // TODO: infer size based on other stuff, instead of hard coded
    <div className={`history-panel p-10 text-sm w-[50rem] h-60 rounded-md bg-blue ${className}`}>
      <span>Some stuff is here...</span>
    </div>
  )
}

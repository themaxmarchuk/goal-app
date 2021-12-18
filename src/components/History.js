import React from 'react'

import styles from '../css/History.module.css'

export default function History ({ className }) {
  return (
    // TODO: infer size based on other stuff, instead of hard coded
    <div className={`${styles.historyPanel} p-10 text-sm w-[50rem] h-60 rounded-md bg-blue ${className}`}>
      <span>Some stuff is here...</span>
    </div>
  )
}

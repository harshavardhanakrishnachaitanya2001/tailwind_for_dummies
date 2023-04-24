import React from 'react'

const Steps = ({style}) => {
  return (
    <ol className='list-decimal ' {style} >
      <li> Install tailwindcss as a dev dependency</li>
      <li> Initialize the tailwind.config.js file</li>
    </ol>
  )
}

export default Steps

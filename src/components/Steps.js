import React from 'react'
import install_tailwind from '../images/install_tailwindcss.gif'
import Gifs from './Gifs'

const Steps = ({className}) => {
  return (
    <>
      <ol className={`list-decimal ${className}`} >
        <li> Install tailwindcss as a dev dependency using <code className='bg-black text-white p-1'>npm i tailwindcss -D</code></li>

        {/* Gif for step 1 */}
        <Gifs gifsource = {install_tailwind}/>

        <li> Initialize the tailwind.config.js file</li>
        <li>In the content array inside the config file, paste this string </li>
      </ol>
    </>
  )
}

export default Steps

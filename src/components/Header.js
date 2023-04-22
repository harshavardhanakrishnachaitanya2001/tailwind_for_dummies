import React from 'react'
import {SiTailwindcss} from 'react-icons/si'

const Header = () => {
  return (
    <div className='max-w-xl mx-auto'>
        <div className="flex justify-center space-x-2 shadow-lg shadow-gray-200 rounded-lg">
            {/* Heading */}
            <h1 className='py-3 font-semibold text-4xl'>TailwindCSS for Dummies</h1>

            {/* Icon */}
            <div className='mt-3'>
                <SiTailwindcss className='text-blue-300 w-10 h-10' />
            </div>
        </div>
    </div>
  )
}

export default Header


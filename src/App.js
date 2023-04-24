import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  return (
    <div className='max-w-6xl mx-auto'>
       <Header />
       <div className='m-3'>
        <Content />
       </div>
    </div>
  )
}

export default App

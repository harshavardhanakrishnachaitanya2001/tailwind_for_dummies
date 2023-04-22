import React from 'react'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  return (
    <>
       <Header />
       <div className='m-3'>
        <Content />
       </div>
    </>
  )
}

export default App

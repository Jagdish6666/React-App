import React from 'react'
import Card from './components/Card'  
import Navbar from './components/Navbar'
import Pocket from './components/Pocket'

const App = () => {
  return (
    <div>
      <nav><Navbar/><Navbar/></nav>
      <Pocket/>
      <div className='card'> <Card /><h1>Jagdish Jadhav</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, voluptas rerum sapiente ipsa esse, velit sit dolorum iste nobis odit aliquid numquam iusto dolor ex vitae maiores. Minima, facilis a?</p> 
      </div>
    </div>
  )
}

export default App

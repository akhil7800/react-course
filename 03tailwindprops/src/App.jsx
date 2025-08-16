import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  let myObj = {
    username: "Akhil",
    age: 21
  }
  
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>

    <Card username="chaiaurcode" btnText = "click me"/>
    <Card username ="Taylor" btnText = "visit me"/>
    <Card username="army"/>

     
    </>
  )
}

export default App

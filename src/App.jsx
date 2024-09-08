
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/main'

function App() {
  const [status, setStatus]=useState("noob")
  return (
    <div className='container'>
      <Header status={status} setStatus={setStatus}/>
      <Main status={status} setStatus={setStatus}/>
    </div>
  )
}

export default App

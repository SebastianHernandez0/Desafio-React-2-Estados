import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  return (
    <div className='layout'>
     <Registro error={error} success={success} setError={setError} setSuccess={setSuccess}/>
    </div>
  )
}

export default App

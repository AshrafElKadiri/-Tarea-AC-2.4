import { useState } from 'react'
import './App.css'
import Reloj from './Componentes/reloj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Reloj />
    </>
  )
}

export default App

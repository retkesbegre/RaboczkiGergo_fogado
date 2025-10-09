import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TablazatSzoba from './components/TablazatSzoba';



function App() {
  const [count, setCount] = useState(0)

  return (
   <TablazatSzoba/>
  )
}

export default App

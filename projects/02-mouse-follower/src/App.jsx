import { useEffect, useState } from 'react'
import { DivFollower } from './components/DivFollower'
import './App.css'

function App() {
 
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y:0})

  const textButton = enabled ? 'Desactivate' : 'Activate'

  useEffect(() =>{
   const handleMove = (event) => setPosition({x:event.x, y:event.y})

   if(enabled)window.addEventListener('pointermove', handleMove)

   return () => window.removeEventListener('pointermove', handleMove)
  }, [enabled])

  return (
    <main>

      <DivFollower position={position} enabled={enabled}/>

      <button onClick={() => setEnabled(!enabled)}>
          {textButton}
      </button>
    </main>
  )
}

export default App

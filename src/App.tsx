import { useState } from 'react'
import './App.scss'
import { Card } from './components/card'

import { FooterActions } from './components/footer/FooterActions.tsx'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <Card />

      <FooterActions />
    </>
  )
}

export default App

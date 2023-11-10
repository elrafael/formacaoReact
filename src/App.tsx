import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { Feed } from './pages/Feed/index.tsx'
import { Explorer } from './pages/Explorer/index.tsx'

function App() {
  return (
    <Routes>
      <Route index path='/' element={<Explorer />} />
      <Route index path='/feed' element={<Feed />} />
    </Routes>
  )
}

export default App

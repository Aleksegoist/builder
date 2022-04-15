import './App.css'
import 'materialize-css'
import { Routes, Route, } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'


function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<HomePage />} />
        <Route path='/ResumePage' element={<ResumePage />} />
      </Routes>
    </>
  )

}

export default App

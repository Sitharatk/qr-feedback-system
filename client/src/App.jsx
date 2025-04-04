import { Routes,Route } from 'react-router-dom'
import ReviewPage from './pages/ReviewPage'

import './App.css'
import Admin from './pages/Admin'

function App() {


  return (
    <>
  
      <Routes>
       
        <Route path="/" element={<ReviewPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App

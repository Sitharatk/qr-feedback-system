import { Routes,Route } from 'react-router-dom'
import ReviewPage from './pages/ReviewPage'

import './App.css'

function App() {


  return (
    <>
  
      <Routes>
       
        <Route path="/" element={<ReviewPage />} />
      </Routes>
    </>
  )
}

export default App

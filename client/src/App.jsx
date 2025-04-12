import { Routes,Route } from 'react-router-dom'
import ReviewPage from './pages/ReviewPage'
import AdminLogin from './pages/AdminLogin'
import './App.css'
import Admin from './pages/Admin'

function App() {


  return (
    <>
  
      <Routes>
       
        <Route path="/" element={<ReviewPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </>
  )
}

export default App

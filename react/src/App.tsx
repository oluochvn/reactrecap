import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  )
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Dashboard } from './Pages/Dashboard'
import { Login } from './Pages/Login'
import { AuthProvider } from './context'
import './App.css'

function App() {
  return (
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Countries from './components/countries'
import './App.css'
import Login from './Pages/login'
import Visited from './Pages/visited'
import Wishlist from './Pages/wishlist'
import NotFound from './Pages/NotFound'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Countries />} />
              
              <Route path="/login" element={<Login />} />
              <Route 
                path="/visited" 
                element={
                  <ProtectedRoute>
                    <Visited />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/wishlist" 
                element={
                  <ProtectedRoute>
                    <Wishlist />
                  </ProtectedRoute>
                } 
              />
              {/* Catch all unmatched routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

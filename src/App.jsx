import { UserProvider } from './context/UserContext'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <LoginForm />
        <Profile />
      </div>
    </UserProvider>
  )
}

export default App 
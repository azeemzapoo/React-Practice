import { useUser } from '../context/UserContext'

function Login() {
  const { setUser } = useUser();

  const handleLogin = () => {
    // Example user object - you can modify this structure based on your needs
    const userData = {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    };
    
    setUser(userData);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login; 
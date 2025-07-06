import { useState } from 'react';
import { useUser } from '../context/UserContext';

function LoginForm() {
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Example 1: Setting user directly with an object
  const handleDirectLogin = () => {
    setUser({
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    });
  };

  // Example 2: Setting user with form data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser({
      id: Date.now(), // Using timestamp as temporary ID
      email: formData.email,
      name: formData.email.split('@')[0] // Using email username as name
    });
  };

  // Example 3: Setting user with async data (simulating API call)
  const handleAsyncLogin = async () => {
    try {
      // Simulating API call
      const response = await new Promise(resolve => 
        setTimeout(() => resolve({
          id: 123,
          name: "Async User",
          email: "async@example.com"
        }), 1000)
      );
      
      setUser(response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Login Examples</h2>
      
      {/* Example 1: Direct Login */}
      <div>
        <h3>Direct Login</h3>
        <button onClick={handleDirectLogin}>Quick Login</button>
      </div>

      {/* Example 2: Form Login */}
      <div>
        <h3>Form Login</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter password"
          />
          <button type="submit">Login with Form</button>
        </form>
      </div>

      {/* Example 3: Async Login */}
      <div>
        <h3>Async Login</h3>
        <button onClick={handleAsyncLogin}>Login with Async Data</button>
      </div>
    </div>
  );
}

export default LoginForm; 
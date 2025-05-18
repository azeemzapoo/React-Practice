import { useUser } from '../context/UserContext'

function Profile() {
  const { user, logout } = useUser();

  if (!user) {
    return <div>Please log in first</div>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile; 
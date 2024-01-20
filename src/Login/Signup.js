import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { auth } from '../Firebase';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to dashboard after account creation
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </form>

    </div>
  );
};

export default Signup;

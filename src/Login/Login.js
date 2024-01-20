import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(-1);
    } catch (error) {
    alert(error);
    }
  };

  
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
  
      try {
        await signInWithPopup(auth, provider);
        navigate(-1);
      } catch (error) {
        console.error(error);
        // Handle errors here
      }
    };
  

  return (
    <div>
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>

      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <Link to = '/signup'>Create account</Link>
    </div>
  );
};

export default LoginPage;

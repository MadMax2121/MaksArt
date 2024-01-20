import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(-1);
    } catch (error) {
    alert("Invalid credentials, please try again");
    }
  };

  
    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
  
      try {
        await signInWithPopup(auth, provider);
        navigate(-1);
      } catch (error) {
        alert("Invalid credentials, please try again");
      
      }
    };
  

  return (
    <main className='Login_main'>
      <h2 style={{fontSize : "28px"}}>Login</h2>
      <form className = "login_form" onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>

      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <Link to = '/signup'>Create account</Link>
    </main>
  );
};

export default LoginPage;

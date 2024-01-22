import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase';
import { motion } from 'framer-motion';
import './Login.css'
import { AuthContext } from './AuthContext';
import ProfileInfo from './ProfileInfo';

const LoginPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [password_hidden, setPassword_hidden] = useState(true);
  const [show_eye_icon, setShow_eye_icon] = useState(false);

  const handleEyeIconMouseDown = (event) => {
    event.preventDefault(); // Prevents the icon from taking focus away from the input
  };

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

  const goBack = () => {
    navigate(-1);;
  };

  const eyeIconVariants = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
     (currentUser) ? (
      <ProfileInfo/>) : (
    <main className='login_main' style={{ position: "relative" }}>
      <h2 style={{ fontSize: "28px" }}>Login</h2>

      <form className="login_form" onSubmit={handleSubmit}>
        <div className='back_arrow' style={{ position: "absolute", left: "-100px", top: "-65px" }}>
          <img onClick={goBack} src="/footer_images/arrow_left.svg" alt="" />
        </div>
        <input style={{ marginBottom: "20px" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='password_container'>
          <input

            type={password_hidden ? "password" : "text"}
            placeholder="Password"
            value={password}
            onFocus={() => setShow_eye_icon(true)}
            onBlur={() => setShow_eye_icon(false)}
            onChange={(e) => setPassword(e.target.value)}
          />
          {show_eye_icon &&
            (

              <motion.img className='eye_icon'
                src="/login/eye_icons.svg"
                onClick={() => setPassword_hidden(!password_hidden)}
                onMouseDown={handleEyeIconMouseDown}
                alt=""
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={eyeIconVariants}
              />
            )}

        </div>
        <button type="submit">Sign In</button>
      </form>
      <div className="google_button" onClick={signInWithGoogle}>
        <img src="/login/google-icon.svg" alt="" />
        <p>Sign in with Google</p>
      </div>
      <div className='create_account'>
        <span>New User? </span><Link style={{ color: "#8b0000" }} to='/signup'>Create account</Link>
      </div>
    </main>
));
};

export default LoginPage;

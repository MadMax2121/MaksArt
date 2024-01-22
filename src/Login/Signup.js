import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { motion } from 'framer-motion';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import "./Signup.css"



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password_hidden, setPassword_hidden] = useState(true);
  const [show_eye_icon, setShow_eye_icon] = useState(false);
  const navigate = useNavigate();


  const handleEyeIconMouseDown = (event) => {
    event.preventDefault(); // Prevents the icon from taking focus away from the input
  };

  const eyeIconVariants = {
    visible: { opacity: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, transition: { duration: 0.3 } }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update profile with additional information
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      navigate(-2);
    } catch (error) {
      alert("Invalid Credentials, please try again!");
    }
  };

  const goBack = () => {
    navigate(-1);;
  };

  return (
    <div className='signup_main'>
      <h2>Sign Up</h2>
      <form className="signup_form" onSubmit={handleSubmit}>
        <div className='back_arrow' style={{ position: "absolute", left: "-100px", top: "-50px" }}>
          <img onClick={goBack} src="/footer_images/arrow_left.svg" alt="" />
        </div>
        <div className='name_input'>
          <input style={{ marginRight: "20px" }}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='password_container' style={{width:"105%"}}>

          <input style={{ marginBottom: "-2px" }}
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
                style={{ top: "" }}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};


export default Signup;

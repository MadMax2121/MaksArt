import React, { useContext, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import { AuthContext } from '../Login/AuthContext';

function Contact() {
  const { currentUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  // Set user data when currentUser changes
  useEffect(() => {
    if (currentUser) {
      const fullName = currentUser.displayName ? currentUser.displayName.split(' ') : [];
      setFirstName(fullName[0] || '');
      setLastName(fullName.slice(1).join(' ') || '');
      setEmail(currentUser.email || '');
    }
  }, [currentUser]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    ).then((result) => {
      alert('Message sent successfully!');
      // Reset the fields after sending the email
      if (currentUser) {
        setSubject('');
      } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      }
    
    }, (error) => {
      alert('Failed to send the message, please try again later.');
    });
  };

  return (
    <main className="contact_main">
      <div className="contact_header">
        <h1>Contact Us</h1>
        <p>Input your contact information and we will try to get back to you right away!</p>
      </div>
      <form className="contact_form" onSubmit={sendEmail}>
        <div className="contact_name">
          <input
            name="first_name"
            value={firstName}
            placeholder='Name'
            style={{ marginRight: "5px" }}
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            name="last_name"
            value={lastName}
            placeholder='Last Name'
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="contact_name">
          <input
            name="reply_to"
            value={email}
            type="email"
            style={{ width: "430px" }}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
          />
        </div>
        <div className='contact_subject'>
          <textarea
            name="message"
            value={subject}
            placeholder='Subject'
            onChange={e => setSubject(e.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default Contact;

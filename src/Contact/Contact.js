import React from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          alert('Message sent successfully!');
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
          <input name="first_name" placeholder='Name' style={{ marginRight: "5px" }} />
          <input name="last_name" placeholder='Last Name' />
        </div>
        <div className="contact_name">
          <input name="reply_to" style={{ width: "430px" }} placeholder='Email' />
        </div>
        <div className='contact_subject'>
          <textarea name="message" placeholder='Subject' />
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default Contact;

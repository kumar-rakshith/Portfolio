import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a data object for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs.send(
      'service_sbkwetn', // Replace with your Service ID
      'template_4vz97pk', // Replace with your Template ID
      templateParams,     // Data object for the template
      'TicIlzvNLAB1KLj2H' // Replace with your User ID
    ).then((result) => {
      console.log(result.text); // Log result for success
      setSuccessMessage('Your message has been sent!');
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }).catch((error) => {
      console.log(error.text); // Log error for debugging
      setErrorMessage('Something went wrong. Please try again later.');
      setSuccessMessage('');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </section>
  );
}

export default Contact;

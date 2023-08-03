
import React from 'react';


function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, please don't hesitate to reach out to us.
      </p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div>
        <p>
          Email: jebelinaeini@gmail.com
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/zahra-jebelinaeini/" target="_blank" rel="noopener noreferrer">My LinkedIn Profile</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;

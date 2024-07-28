import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <div className="group">
        <div className="text">
          If you're interested, don't hesitate to contact me 😊.
        </div>

        <form id="formSubmit"> 
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" cols="30" rows="4"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

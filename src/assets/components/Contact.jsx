import React from "react";

function Contact () {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form">

        
<label
 
htmlFor="name">Name</label>

        
<input
 
type="text"
 
id="name"
 
name="name"
 
placeholder="Your Name"
 
required />

        
<label
 
htmlFor="email">Email</label>

        
<input
 
type="email" id="email"
 
name="email"
 
placeholder="Your Email"
 
required />

        
<label
 
htmlFor="message">Message</label>

        
<textarea
 
id="message"
 
name="message"
 
placeholder="Your Message"
 
required></textarea>

        
<button
 
type="submit">Send Message</button>

      
</form>
    </section>
  );
};

export default Contact;
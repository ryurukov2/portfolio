import React, { useState } from "react";
import emailjs from "@emailjs/browser";



const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        { name, email, message, to_email: "radoslav.vy@gmail.com" },
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (

    <div className="bg-gray-900 text-yellow-400 py-16 text-center">
      
    <h1 className="text-4xl mb-8">Contact Me</h1>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows="4"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-3 py-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Send Message
      </button>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
    </div>
  );
};

export default ContactForm;

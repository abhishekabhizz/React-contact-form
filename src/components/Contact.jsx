import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iwh31o8', 'template_szn13uj', form.current, {
        publicKey: 'Bk4r44WCIVPq6j3-J',
      })
      .then(
        () => {
          console.log("success")
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
        
          console.log('Error:', error.text);
          alert('Something went wrong. Please try again.',error.text);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-blue-100 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border border-blue-300 rounded-md shadow-sm focus:outline-none bg-blue-50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 border border-blue-300 rounded-md shadow-sm focus:outline-none bg-blue-50"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full p-4 border border-blue-300 rounded-md shadow-sm focus:outline-none bg-blue-50"
            required
          />
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-blue-700 rounded-md shadow-md hover:bg-blue-800 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

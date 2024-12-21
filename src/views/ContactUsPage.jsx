import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="container mt-5">
      <div className="text-center">
        <h2 className="display-4 mb-4">Get in Touch</h2>
        <p className="lead text-muted">Have questions or feedback? We'd love to hear from you. Please fill out the form below.</p>
      </div>
      {!formSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className="mx-auto p-4 shadow-lg rounded"
          style={{ maxWidth: '600px', backgroundColor: '#ffffff' }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      ) : (
        <div className="text-center mt-5">
          <h4 className="text-success">Thank you for contacting us!</h4>
          <p className="lead">We have received your message and will respond as soon as possible.</p>
        </div>
      )}
    </section>
  );
}

import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await axios.post('http://localhost:5000/api/inquiries', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row mb-5">
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faPhone} size="2x" className="text-primary mb-3" />
          <h4>Phone</h4>
          <p>(+91) 96 69 17 33 14</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-primary mb-3" />
          <h4>Email</h4>
          <p>hatake.kakashi.946950@gmail.com</p>
        </div>
        <div className="col-md-4 text-center mb-4">
          <FontAwesomeIcon icon={faLocationDot} size="2x" className="text-primary mb-3" />
          <h4>Address</h4>
          <p>HOD Cabin-CS, 2nd Floor, Aryabhatta Block, ABES Engineering College, Ghaziabad, UP</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <div className="alert alert-success mt-3">
                    Message sent successfully!
                  </div>
                )}
                {status === 'error' && (
                  <div className="alert alert-danger mt-3">
                    Error sending message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
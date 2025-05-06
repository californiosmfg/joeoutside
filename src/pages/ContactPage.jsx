import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  const formSubmitEndpoint = "https://formsubmit.co/contact@californiosmfg.com";
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('submitted') === 'true') {
      setShowSuccessMessage(true);
      window.history.replaceState(null, '', location.pathname);
    }
  }, [location.search, location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-[#FEF8E7] min-h-[calc(100vh-136px)] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-[#A13C20]">
          Get In Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          <div className="space-y-8 text-gray-700">
            <h2 className="text-3xl font-semibold text-[#2A5041]">Contact Information</h2>
            <p className="text-lg leading-relaxed">
              Have a question, suggestion, or need help with one of our guides? Fill out the form, or reach out using the details below. We aim to respond within 1-2 business days.
            </p>
            
            <div className="flex items-start space-x-4">
              <span className="mt-1 text-2xl text-[#A13C20]">📍</span>
              <div>
                <h3 className="text-xl font-semibold text-[#2A5041] mb-1">Our Location</h3>
                <p className="text-base leading-snug">
                  123 Outdoor Trail Ave<br/>
                  Adventure City, CA 98765
                </p> 
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="mt-1 text-2xl text-[#A13C20]">✉️</span>
              <div>
                <h3 className="text-xl font-semibold text-[#2A5041] mb-1">Email Us</h3>
                <a href="mailto:contact@californiosmfg.com" className="text-base hover:underline hover:text-[#A13C20]">
                  contact@californiosmfg.com
                </a>
              </div>
            </div>
            
          </div>

          <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-[#2A5041] mb-8">
              Send us a message
            </h2>
            <form action={formSubmitEndpoint} method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 text-sm font-bold mb-2">Name:</label>
                <input 
                  type="text" id="name" name="name" required 
                  value={formData.name} onChange={handleChange}
                  className={`bg-white shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-400`}
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 text-sm font-bold mb-2">Email:</label>
                <input 
                  type="email" id="email" name="email" required 
                  value={formData.email} onChange={handleChange}
                  className={`bg-white shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-400`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-800 text-sm font-bold mb-2">Subject:</label>
                <input 
                  type="text" id="subject" name="subject" required 
                  value={formData.subject} onChange={handleChange}
                  className={`bg-white shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-400`}
                  placeholder="Reason for contacting us"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 text-sm font-bold mb-2">Message:</label>
                <textarea 
                  id="message" name="message" required rows={5} 
                  value={formData.message} onChange={handleChange}
                  className={`bg-white shadow appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#A13C20]/60 focus:border-transparent placeholder-gray-400`}
                  placeholder="How can we help?"
                ></textarea>
              </div>

              {/* FormSubmit Specific Fields */}
              <input type="hidden" name="_captcha" value="true" />
              <input 
                type="hidden" 
                name="_next" 
                value="http://localhost:5174/contact?submitted=true" 
              />

              {/* Display Success Message if redirected */}
              <div className="mb-4 h-auto text-center"> 
                {showSuccessMessage && (
                  <p className="bg-green-100 text-green-800 px-4 py-3 rounded-md text-sm font-semibold flex items-center justify-center space-x-2">
                    <span className="text-lg text-green-600">✓</span>
                    <span>Thank you for your message! We'll get back to you soon.</span>
                  </p>
                )}
              </div>

              <div className="text-center mt-6">
                <button 
                  type="submit" 
                  className={`bg-[#2A5041] hover:bg-[#1e3a2f] text-[#FEF8E7] font-bold py-3 px-10 rounded-lg transition duration-300 shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2A5041]/50 focus:ring-offset-2`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage; 
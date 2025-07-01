import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-divider"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">📬 Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            "I'm not just building AI. I'm building understanding."
            <br className="hidden md:block" />
            If you share this drive for meaning, logic, and mindful innovation—let's connect.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="font-space text-2xl font-semibold gradient-text mb-6">Send a Message</h3>
            <form className="contact-form space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                />
              </div>
              <div>
                <textarea 
                  rows={6} 
                  name="message"
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-space text-xl font-semibold gradient-text mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-mono text-sm">divyanshukrpandey17@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-mono text-sm">+91-8827455502</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm">linkedin.com/in/divyanshu-pandey-743180110</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-space text-xl font-semibold gradient-text mb-4">Academic Background</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">B.Tech – Computer Science</div>
                  <div className="text-muted-foreground">ITM University, Gwalior (2019)</div>
                </div>
                <div>
                  <div className="font-semibold">Research Experience</div>
                  <div className="text-muted-foreground">IIIT Hyderabad (2023-2024)</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="font-space text-xl font-semibold gradient-text mb-4">Beyond Code</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  <span>Organized 'Rubaroo' interdisciplinary event</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>College badminton and football representative</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span>Strategic chess enthusiast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

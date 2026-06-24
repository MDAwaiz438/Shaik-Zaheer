"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    let newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    /* 
     * TODO: Wire up EmailJS here.
     * 1. npm install @emailjs/browser
     * 2. import emailjs from '@emailjs/browser';
     * 3. emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
     *      .then(() => setSubmitted(true))
     *      .catch(err => console.error(err));
     */
     
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Blobs for Glassmorphism Background */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '400px', height: '400px', background: 'var(--color-gold)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.25, zIndex: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '500px', height: '500px', background: '#3c3fde', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.2, zIndex: 0, pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us for any inquiries or support.</p>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '4rem', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          background: 'rgba(255, 255, 255, 0.03)', 
          backdropFilter: 'blur(20px)', 
          WebkitBackdropFilter: 'blur(20px)', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '24px', 
          padding: '3rem', 
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)' 
        }}>
          
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>Get In Touch</h3>
            
            <div className="contact-item" style={{ marginBottom: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>📍</div>
              <div style={{ paddingTop: '0.25rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Store Address</strong>
                <span style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{/* TODO: Replace with real Indian store address */}123 Tech Avenue, Innovation District<br/>City, State 12345</span>
              </div>
            </div>
            
            <div className="contact-item" style={{ marginBottom: '2rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>📞</div>
              <div style={{ paddingTop: '0.25rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Phone</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'rgba(255,255,255,0.7)' }}>{/* TODO: Replace with real Indian phone number */}+91 98765 43210</span>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem', borderRadius: '8px' }}>WhatsApp Us</a>
                </div>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '50%', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyItems: 'center' }}>✉️</div>
              <div style={{ paddingTop: '0.25rem' }}>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Email</strong>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>support@zedmobiles.in</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {submitted ? (
              <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid var(--color-gold)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                <h3 style={{ color: 'var(--color-gold-bright)', marginBottom: '1rem', fontSize: '1.5rem' }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>Thanks for reaching out. We'll get back to you within a few hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send a Message</h3>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: `1px solid ${errors.name ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`, 
                      borderRadius: '12px', 
                      color: '#fff', 
                      outline: 'none', 
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.border = `1px solid ${errors.name ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`;
                    }}
                  />
                  {errors.name && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.name}</span>}
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: `1px solid ${errors.email ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`, 
                      borderRadius: '12px', 
                      color: '#fff', 
                      outline: 'none', 
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.border = `1px solid ${errors.email ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`;
                    }}
                  />
                  {errors.email && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.email}</span>}
                </div>
                <div>
                  <textarea 
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ 
                      width: '100%', 
                      padding: '1.2rem', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: `1px solid ${errors.message ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`, 
                      borderRadius: '12px', 
                      color: '#fff', 
                      outline: 'none', 
                      fontFamily: 'inherit', 
                      resize: 'vertical',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.border = '1px solid rgba(255, 255, 255, 0.3)';
                    }}
                    onBlur={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.border = `1px solid ${errors.message ? '#ff4d4f' : 'rgba(255, 255, 255, 0.1)'}`;
                    }}
                  ></textarea>
                  {errors.message && <span style={{ color: '#ff4d4f', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', fontSize: '1.1rem', marginTop: '0.5rem', fontWeight: 600 }}>Send Message</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

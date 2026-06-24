"use client";
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally you'd send formData to an API here
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="page-wrapper" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh' }}>
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us for any inquiries or support.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="contact-info" style={{ background: 'var(--color-bg-card)', padding: '2.5rem', border: '1px solid var(--color-border-subtle)' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-gold)' }}>Get In Touch</h3>
            
            <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <i style={{ fontSize: '1.5rem' }}>📍</i>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Store Address</strong>
                <span style={{ color: 'var(--color-text-muted)' }}>123 Tech Avenue, Innovation District<br/>City, State 12345</span>
              </div>
            </div>
            
            <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <i style={{ fontSize: '1.5rem' }}>📞</i>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Phone</strong>
                <span style={{ color: 'var(--color-text-muted)' }}>+1 (555) 123-4567</span>
              </div>
            </div>
            
            <div className="contact-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <i style={{ fontSize: '1.5rem' }}>✉️</i>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>Email</strong>
                <span style={{ color: 'var(--color-text-muted)' }}>support@zedmobiles.in</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid var(--color-gold)', padding: '2rem', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-gold-bright)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Name</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-primary)', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-primary)', outline: 'none', fontFamily: 'inherit' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>Message</label>
                  <textarea 
                    required 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ width: '100%', padding: '1rem', background: 'var(--color-bg-card)', border: '1px solid var(--color-border-subtle)', color: 'var(--color-text-primary)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

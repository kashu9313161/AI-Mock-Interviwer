import { useState } from 'react';
import '../styles/Contact.css';

const validate = {
  name:    (v) => v.trim().length < 2   ? 'Name must be at least 2 characters' : '',
  email:   (v) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email address' : '',
  message: (v) => v.trim().length < 10  ? 'Message must be at least 10 characters' : '',
};

function Contact() {
  const [fields,    setFields]    = useState({ name: '', email: '', message: '' });
  const [touched,   setTouched]   = useState({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const errors  = { name: validate.name(fields.name), email: validate.email(fields.email), message: validate.message(fields.message) };
  const isValid = Object.values(errors).every(e => e === '');

  const handleChange = (f) => (e) => setFields(p => ({ ...p, [f]: e.target.value }));
  const handleBlur   = (f) => ()  => setTouched(p => ({ ...p, [f]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;
    setLoading(true);
    setTimeout(() => {
      console.log('Contact form submitted:', fields);
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  const details = [
    { icon: '📧', label: 'Email',         value: 'hello@aimockinterview.dev' },
    { icon: '⏱️', label: 'Response time', value: 'Within 24 hours'           },
    { icon: '🌍', label: 'Availability',  value: 'Global — all time zones'   },
  ];

  return (
    <main className="page contact">
      <div className="contact__inner">
        <div className="contact__info">
          <p className="page-tag fade-up">Get in touch</p>
          <h1 className="page-heading fade-up-2">Let's talk</h1>
          <p className="page-sub fade-up-3">
            Questions, feedback, or partnership enquiries — we read every message.
          </p>
          <div className="fade-up-4">
            {details.map(d => (
              <div className="contact__detail" key={d.label}>
                <div className="contact__detail-icon">{d.icon}</div>
                <div>
                  <p className="contact__detail-label">{d.label}</p>
                  <p className="contact__detail-value">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__form-card fade-up-2">
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✅</span>
              <h3>Message received</h3>
              <p>We'll get back to you at <strong>{fields.email}</strong> within 24 hours.</p>
            </div>
          ) : (
            <>
              <p className="contact__form-title">Send a message</p>
              <form onSubmit={handleSubmit} noValidate>
                {[
                  { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name'        },
                  { id: 'email',   label: 'Email',   type: 'email', placeholder: 'you@example.com'  },
                ].map(({ id, label, type, placeholder }) => (
                  <div className="form-group" key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      id={id}
                      type={type}
                      value={fields[id]}
                      onChange={handleChange(id)}
                      onBlur={handleBlur(id)}
                      placeholder={placeholder}
                      className={touched[id] && errors[id] ? 'error' : ''}
                    />
                    {touched[id] && errors[id] && <p className="form-error">{errors[id]}</p>}
                  </div>
                ))}

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={fields.message}
                    onChange={handleChange('message')}
                    onBlur={handleBlur('message')}
                    placeholder="Tell us what's on your mind..."
                    className={touched.message && errors.message ? 'error' : ''}
                  />
                  {touched.message && errors.message && <p className="form-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  disabled={loading || (Object.values(touched).every(Boolean) && !isValid)}
                >
                  {loading ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Contact;

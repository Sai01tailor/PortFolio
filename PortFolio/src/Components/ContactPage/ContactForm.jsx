import { useState } from 'react';
import { motion } from 'motion/react';
import axiosClient from '../../api/axiosClient';

// Shared ruled-paper input classes
const INPUT_BASE =
  'w-full bg-transparent border-b-4 border-black border-dashed outline-none ' +
  'text-lg md:text-xl font-medium placeholder:text-gray-400 pb-2 pt-1 ' +
  'focus:border-solid transition-all duration-200';

const shakeVariants = {
  idle: { rotate: 0, x: 0 },
  hover: {
    rotate: [0, -2, 2, -2, 2, 0],
    x: [0, -3, 3, -3, 3, 0],
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
};

const INITIAL_FORM = { name: '', email: '', message: '' };

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear stale status when user starts editing again
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await axiosClient.post('/api/v1/contact', form);
      setStatus({ type: 'success', text: "Message sent! I'll get back to you soon ✏️" });
      setForm(INITIAL_FORM);
    } catch ({ message }) {
      setStatus({ type: 'error', text: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-2xl mx-auto flex flex-col gap-10 px-4 sm:px-6"
    >
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-name"
          className="text-sm font-black uppercase tracking-widest"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name..."
          required
          autoComplete="name"
          className={INPUT_BASE}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-email"
          className="text-sm font-black uppercase tracking-widest"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          autoComplete="email"
          className={INPUT_BASE}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="contact-message"
          className="text-sm font-black uppercase tracking-widest"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind..."
          required
          rows={5}
          className={`${INPUT_BASE} resize-none leading-8`}
          /* Leading-8 mimics ruled-paper lines */
          style={{
            backgroundImage:
              'repeating-linear-gradient(transparent, transparent 31px, #d1d5db 31px, #d1d5db 32px)',
          }}
        />
      </div>

      {/* Status message */}
      {status && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-base font-bold ${
            status.type === 'success' ? 'text-green-700' : 'text-red-600'
          }`}
        >
          {status.text}
        </motion.p>
      )}

      {/* Send button */}
      <div className="flex justify-start">
        <motion.button
          type="submit"
          disabled={loading}
          variants={shakeVariants}
          initial="idle"
          whileHover={loading ? 'idle' : 'hover'}
          className={`
            px-10 py-3 border-4 border-black bg-black text-white
            font-black text-lg tracking-wide
            hover:bg-white hover:text-black transition-colors duration-150
            disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          `}
          style={{
            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
          }}
        >
          {loading ? 'Sending...' : 'Send ✉'}
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;

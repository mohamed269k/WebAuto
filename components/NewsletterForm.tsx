
import React, { useState } from 'react';

interface NewsletterFormProps {
  ctaText: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ ctaText }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setMessage(`Thanks for subscribing, ${email}! Check your inbox.`);
      setEmail('');
      setTimeout(() => setMessage(''), 5000);
    } else {
      setMessage('Please enter a valid email address.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          className="flex-grow w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-brand-red font-bold text-white rounded-md hover:bg-brand-orange transform hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-red/20"
        >
          {ctaText}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-brand-orange">{message}</p>}
    </div>
  );
};

export default NewsletterForm;

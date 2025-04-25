import React, { useState } from 'react';
import Button from './ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setIsError(true);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsError(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Stellar News</h2>
          <p className="text-lg md:text-xl text-primary-100 mb-8">
            Get the latest updates, tips, and exclusive offers delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 animate-fade-in">
              <div className="text-2xl font-bold mb-2">Thank You for Subscribing!</div>
              <p className="text-primary-100">
                You're now on the list! Check your inbox for a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border ${
                    isError ? 'border-red-400' : 'border-white/20'
                  } text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsError(false);
                  }}
                />
                {isError && (
                  <p className="text-left text-sm text-red-200 mt-1">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-sm text-primary-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
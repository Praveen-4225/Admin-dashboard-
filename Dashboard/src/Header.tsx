import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import Button from './ui/Button';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center">
              <Star className="h-6 w-6 mr-2 text-primary-500" />
              <span className="bg-gradient-to-r from-primary-600 to-teal-500 bg-clip-text text-transparent">
                Stellar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
            <Button variant="secondary" size="sm">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 mt-4 py-4 px-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3">
              <Link href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#faq" onClick={() => setIsMenuOpen(false)}>
                FAQ
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-3 flex flex-col space-y-3">
                <Button variant="secondary" fullWidth>
                  Log In
                </Button>
                <Button variant="primary" fullWidth>
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Star, Twitter, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 text-primary-500 mr-2" />
              <span className="text-2xl font-bold text-white">Stellar</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Stellar App Nexus is a comprehensive platform for building, deploying, and scaling modern applications with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Changelog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Stellar App Nexus. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
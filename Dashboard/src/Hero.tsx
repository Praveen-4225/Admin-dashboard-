import React from 'react';
import Button from './ui/Button';
import { Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_30%,rgba(74,222,128,0.2)_0%,rgba(125,211,252,0.4)_25%,rgba(125,211,252,0)_50%)]"></div>
      
      {/* Orbital Animation */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-secondary-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-400/20 to-primary-300/30 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Discover the future of app management</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 via-indigo-600 to-secondary-600 bg-clip-text text-transparent">
              Launch Your Ideas Into The Digital Universe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Stellar App Nexus provides everything you need to build, deploy, and scale your applications in one seamless platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="group">
              Get Started Free
              <Star className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
            </Button>
            <Button variant="outline" size="lg">
              Book a Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">5,000+</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">99.9%</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
              <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
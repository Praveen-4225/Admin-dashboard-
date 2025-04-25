import React from 'react';
import { Rocket, Server, Shield, Zap, Users, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="h-10 w-10 text-primary-500" />,
      title: 'Quick Deployment',
      description: 'Launch your apps with a single click. Our platform handles all the complexity for you.'
    },
    {
      icon: <Server className="h-10 w-10 text-primary-500" />,
      title: 'Scalable Infrastructure',
      description: 'Automatically scale your resources based on demand. Pay only for what you use.'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and security protocols to keep your apps and data safe.'
    },
    {
      icon: <Zap className="h-10 w-10 text-primary-500" />,
      title: 'Performance Optimization',
      description: 'Built-in optimization tools to ensure your apps are always lightning fast.'
    },
    {
      icon: <Users className="h-10 w-10 text-primary-500" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for your entire development team.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary-500" />,
      title: 'Detailed Analytics',
      description: 'Comprehensive analytics to track performance, usage, and user behavior.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Powerful Features For Modern App Development
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to build, deploy, and manage your applications in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
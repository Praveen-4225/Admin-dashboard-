import React, { useState } from 'react';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const PricingToggle: React.FC<{
  isAnnual: boolean;
  onToggle: () => void;
}> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex items-center justify-center mb-10">
      <span className={`text-base ${!isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Monthly</span>
      <button
        onClick={onToggle}
        className="relative mx-4 h-6 w-12 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-primary-600 transition-transform duration-200 ${
            isAnnual ? 'translate-x-6' : ''
          }`}
        />
      </button>
      <span className={`text-base ${isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
        Annual <span className="text-primary-600 dark:text-primary-400 font-medium ml-1">Save 20%</span>
      </span>
    </div>
  );
};

const PricingTier: React.FC<{
  title: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  isPopular?: boolean;
  isAnnual: boolean;
}> = ({ title, price, description, features, isPopular = false, isAnnual }) => {
  return (
    <div className={`rounded-2xl p-8 shadow-lg transition-all duration-200 ${
      isPopular ? 'bg-gradient-to-b from-primary-600 to-primary-700 text-white scale-105 z-10' : 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700'
    }`}>
      {isPopular && (
        <div className="bg-primary-500 text-white text-xs font-bold uppercase tracking-wide py-1 px-2 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
      <p className={`mb-4 text-sm ${isPopular ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>{description}</p>
      <div className="mb-6">
        <span className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          ${isAnnual ? price.annual : price.monthly}
        </span>
        <span className={`text-sm ${isPopular ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'}`}>
          /{isAnnual ? 'year' : 'month'}
        </span>
      </div>
      <Button
        variant={isPopular ? 'secondary' : 'primary'}
        fullWidth
        className={isPopular ? 'bg-white text-primary-700 hover:bg-gray-100' : ''}
      >
        Get Started
      </Button>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 mt-0.5 ${isPopular ? 'text-primary-100' : 'text-primary-600 dark:text-primary-400'}`} />
            <span className={`text-sm ${isPopular ? 'text-primary-50' : 'text-gray-600 dark:text-gray-300'}`}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      title: 'Starter',
      price: { monthly: 29, annual: 279 },
      description: 'Perfect for individuals and small projects',
      features: [
        'Up to 3 apps',
        '5GB storage',
        '50k monthly visitors',
        'Community support',
        'Basic analytics',
        'Manual deployments'
      ]
    },
    {
      title: 'Professional',
      price: { monthly: 79, annual: 759 },
      description: 'Ideal for growing businesses and teams',
      features: [
        'Unlimited apps',
        '50GB storage',
        '500k monthly visitors',
        'Priority support',
        'Advanced analytics',
        'Automatic deployments',
        'Custom domains',
        'Team collaboration'
      ],
      isPopular: true
    },
    {
      title: 'Enterprise',
      price: { monthly: 199, annual: 1919 },
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited apps',
        '500GB storage',
        'Unlimited visitors',
        '24/7 dedicated support',
        'Custom analytics',
        'Advanced security features',
        'SLA guarantees',
        'Dedicated infrastructure',
        'API access'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Transparent Pricing For Every Scale
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that best fits your needs. All plans include our core features.
          </p>
        </div>

        <PricingToggle isAnnual={isAnnual} onToggle={() => setIsAnnual(!isAnnual)} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingTier 
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              isAnnual={isAnnual}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom plan? We've got you covered.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
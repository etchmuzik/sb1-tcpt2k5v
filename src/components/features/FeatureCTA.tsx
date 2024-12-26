import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

export default function FeatureCTA() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
        Ready to Transform Your Sales Process?
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8">
        Start your free trial today and experience the power of AI-assisted sales.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/signup">
          <Button variant="minimal" icon={ArrowRight}>
            Start Free Trial
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline">
            Contact Sales
          </Button>
        </Link>
      </div>
    </div>
  );
}
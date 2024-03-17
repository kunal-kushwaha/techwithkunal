'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { NewsletterProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Input } from './ui/input';
import { Button } from './ui/button';

// TODO: Add hashnode integration
// TODO: Add Zod + ReactHookForm for better form control

const Newsletter = ({ className, ...props }: NewsletterProps) => {
  const [email, setEmail] = useState('');
  return (
    <section
      id="newsletter"
      className={cn(
        className,
        'py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-800'
      )}
      {...props}
    >
      <ViewContainer className="flex justify-between p-10 md:p-12 lg:p-16 bg-gray-50 rounded-lg flex-wrap gap-8 md:gap-12 lg:gap-16">
        <div className="grow">
          <h2 className="text-2xl md:text-[28px] font-semibold">
            Join the newsletter
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
            Sign up for the very best tutorials and the latest news.
          </p>
        </div>
        <form className="grow">
          <div className="flex gap-2 flex-col md:flex-row">
            <Input
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              required
            />
            <Button type="submit" disabled={email === ''}>
              Subscribe
            </Button>
          </div>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Your privacy is important. I never share your email.
          </p>
        </form>
      </ViewContainer>
    </section>
  );
};

export default Newsletter;

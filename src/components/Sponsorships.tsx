import { cn } from '@/lib/utils';
import { SponsorshipsProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Icon } from './ui/icon';
import { BarChart2, Mail, Smile, Sparkle, Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const Sponsorships = ({ className, ...props }: SponsorshipsProps) => {
  return (
    <section
      id="sponsorships"
      className={cn(className, 'py-16 md:py-20 lg:py-24')}
      {...props}
    >
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14">
        <div>
          <Icon>
            <BarChart2 />
          </Icon>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">
            Growing brands — Sponsorships
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            Powerful and self-serving sponsorships to help you convert, engage
            and retain more users.
          </p>
          <Link
            href="/sponsorships"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'mt-8 md:mt-9 lg:mt-10'
            )}
          >
            Sponsorships <Sparkle fill="currentColor" strokeWidth={0} />
          </Link>
        </div>
        <div className="space-y-8 lg:space-y-14 md:row-start-2 lg:row-start-auto">
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <Mail />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Share team inboxes
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <Zap />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Share team inboxes
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
        </div>
        <div className="space-y-8 lg:space-y-14 md:row-start-2 lg:row-start-auto">
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <BarChart2 />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Share team inboxes
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <Smile />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Share team inboxes
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
        </div>
      </ViewContainer>
    </section>
  );
};

export default Sponsorships;

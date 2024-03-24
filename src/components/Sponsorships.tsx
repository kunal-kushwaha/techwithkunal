import { cn } from '@/lib/utils';
import { SponsorshipsProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Icon } from './ui/icon';
import { BarChart2, HeartHandshake, LineChart, Rss, Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const Sponsorships = ({ className, ...props }: SponsorshipsProps) => {
  return (
    <section
      id="sponsorships"
      className={cn(className, 'py-16 md:py-20 lg:py-24')}
      {...props}
    >
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <Icon>
            <BarChart2 />
          </Icon>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">
            Sponsorship opportunities
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            As a passionate advocate for ethical community education and
            fostering meaningful connections, I offer unique sponsorship
            opportunities that benefit both your company and the broader
            developer community.
          </p>
          <Link
            href="mailto:contact@techwithkunal.com"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'mt-8 md:mt-9 lg:mt-10'
            )}
          >
            Get in touch
          </Link>
        </div>
        <div className="md:row-start-2 lg:row-start-auto col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <Rss />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Dynamic content creation
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Leveraging my 600,000 YouTube subscribers, I create engaging video
              content and write insightful blog posts, including newsletters.
              These platforms are perfect for educating the community about your
              projects and initiatives.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <Zap />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Engaging events
            </h3>
            <p className="text-gray-500 text-base mt-2">
              I host a variety of events, both online and in-person, attended by
              thousands. This includes webinars, podcasts, and more, offering
              sponsors significant visibility and interaction opportunities with
              an enthusiastic audience.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <LineChart />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              Strategic consulting
            </h3>
            <p className="text-gray-500 text-base mt-2">
              With my experience in growing numerous open-source projects, I
              provide consultancy services to attract quality contributors and
              users, enhancing the visibility and impact of your projects.
            </p>
          </div>
          <div className="rounded-md bg-gray-50 p-4 md:p-5 lg:p-6">
            <Icon variant="square">
              <HeartHandshake />
            </Icon>
            <h3 className="text-lg md:text-[20px] font-medium mt-10 md:mt-12 lg:mt-16">
              DevRel support
            </h3>
            <p className="text-gray-500 text-base mt-2">
              I extend support to your Developer Relations efforts, aligning
              with your team to maximize outreach and engagement, leveraging my
              expertise to boost your community presence and impact.
            </p>
          </div>
        </div>
      </ViewContainer>
    </section>
  );
};

export default Sponsorships;

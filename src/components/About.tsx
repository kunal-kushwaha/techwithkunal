import { cn } from '@/lib/utils';
import { AboutProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Icon } from './ui/icon';
import { ArrowUpRight, Zap } from 'lucide-react';
import Link from 'next/link';

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(className, 'py-20 md:py-28 lg:py-32')}
      {...props}
    >
      <ViewContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        <div>
          <Icon>
            <Zap />
          </Icon>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">About me.</h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            Field CTO at{' '}
            <Link
              href="https://www.civo.com/"
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              Civo
            </Link>
            , CNCF ambassador and Founder of{' '}
            <Link
              href="https://wemakedevs.org"
              className="underline hover:no-underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              WeMakeDevs
            </Link>
            .
          </p>
        </div>
        <div className="md:row-start-2 lg:row-start-auto md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Educator and mentor
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Has educated thousands of developers, sharing in-depth knowledge
              and expertise in tech.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              DevOps consultant
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Provides insightful consultancy to companies embarking on their
              DevOps journeys.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Community leader &{' '}
              <Link
                href="https://www.credly.com/users/kunalkushwaha/badges"
                className="group underline hover:no-underline inline-flex gap-2 items-center"
                target="_blank"
                rel="noreferrer noopener"
              >
                keynote speaker{' '}
                <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Renowned for exceptional community leadership and engaging as a
              speaker at global tech conferences.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Empathy and professionalism
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Known for a unique blend of empathetic understanding and
              professional acumen in his approach to work and life.
            </p>
          </div>
        </div>
      </ViewContainer>
    </section>
  );
};

export default About;

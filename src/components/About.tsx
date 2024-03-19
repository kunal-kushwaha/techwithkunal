import { cn } from '@/lib/utils';
import { AboutProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Icon } from './ui/icon';
import { Zap } from 'lucide-react';

const About = ({ className, ...props }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(className, 'my-20 md:my-28 lg:my-32')}
      {...props}
    >
      <ViewContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        <div>
          <Icon>
            <Zap />
          </Icon>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">About me.</h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            DevRel manager at Civo, CNCF Ambassador, GitHub Star
          </p>
        </div>
        <div className="md:row-start-2 lg:row-start-auto md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Educator and Mentor
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Has educated thousands of developers, sharing in-depth knowledge
              and expertise in tech.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              DevOps Consultant
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Provides insightful consultancy to companies embarking on their
              DevOps journeys.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Community Leader & Keynote Speaker
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Renowned for exceptional community leadership and engaging as a
              speaker at global tech conferences.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Empathy and Professionalism
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

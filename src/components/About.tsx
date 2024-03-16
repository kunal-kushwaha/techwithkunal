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
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
        <div>
          <Icon>
            <Zap />
          </Icon>
          <h2 className="text-3xl font-semibold mt-4 md:mt-6">About me.</h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5">
            Heyy there! I’m currently working as a DevRel @Civo. Other than
            that, I’m a DevOps engineer, community builder and a super
            instructor.
          </p>
        </div>
        <div className="md:row-start-2 lg:row-start-auto space-y-6 md:space-y-8">
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Empowering devs through courses
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Whether you’re a beginner or an seasoned developer, my courses
              will take you from nothing to everything.
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              DevOps engineer at the night{' '}
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Started as a hobby, tinkering with devops is my passion now! I
              have been working on cloud for the past 4 years.{' '}
            </p>
          </div>
        </div>
        <div className="md:row-start-2 lg:row-start-auto space-y-6 md:space-y-8">
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Community builder during the day{' '}
            </h3>
            <p className="text-gray-500 text-base mt-2">
              Looking to build a community around your product? You’ve come the
              right place! I have built many developer centric communities.{' '}
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-[20px] font-medium">
              Speaker during the weekends{' '}
            </h3>
            <p className="text-gray-500 text-base mt-2">
              I have spoken at various international tech conferences about
              DevOps, community building and fun tech stuff!{' '}
            </p>
          </div>
        </div>
      </ViewContainer>
    </section>
  );
};

export default About;

import { headerImage, headerUnderline } from '@/assets';
import About from '@/components/About';
import Courses from '@/components/Courses';
import {
  Header,
  HeaderTitle,
  HeaderDescription,
  HeaderCta,
  HeaderImage,
} from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import Sponsorships from '@/components/Sponsorships';
import Testimonials from '@/components/Testimonials';
import { buttonVariants } from '@/components/ui/button';
import { TESTIMONIALS_HOME } from '@/constants';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header>
        <HeaderTitle>
          Driving Innovation, Educating Minds, and Strengthening{' '}
          <span className="relative -z-10">
            Developer Relations
            <Image
              src={headerUnderline}
              alt="Header underline"
              className="absolute -bottom-1 lg:bottom-0 lg:w-4/5 left-0 lg:left-14 -z-20"
            />
          </span>
        </HeaderTitle>
        <HeaderDescription>
          Kunal Kushwaha is a Developer Relations Manager at{' '}
          <Link
            href="https://www.civo.com"
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Civo
          </Link>
          , where he fosters a deep connection between developers and innovative
          cloud-native technologies. As the founder of{' '}
          <Link
            href="www.wemakedevs.org"
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            WeMakeDevs
          </Link>
          , Kunal has taught thousands online and consulted numerous companies
          on their cloud journeys. Recognized as a community leader, he has
          delivered keynote speeches at global conferences, embodying empathy in
          all aspects of his work and life.
        </HeaderDescription>
        <HeaderCta>
          <Link
            href="#about"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <ArrowDown /> Know more
          </Link>
          <Link
            href="mailto:contact@techwithkunal.com"
            className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
          >
            Get in touch
          </Link>
        </HeaderCta>
        <HeaderImage src={headerImage} alt="Kunal Kushwaha" />
      </Header>
      <About />
      <Courses />
      <Sponsorships />
      <Testimonials testimonials={TESTIMONIALS_HOME} />
      <Newsletter />
    </div>
  );
}

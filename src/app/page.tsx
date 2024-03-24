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
          Kunal Kushwaha works as a Developer Relations Manager at{' '}
          <Link
            href="https://www.civo.com"
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Civo
          </Link>
          , where he drives innovation in cloud-native technologies and has
          educated thousands of developers. Renowned for his empathetic approach
          and community leadership, he has been a speaker at global tech
          conferences, embodying expertise and passion in every endeavor.
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

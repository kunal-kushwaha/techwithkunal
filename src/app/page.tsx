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
import Partners from '@/components/Partners';
import Sponsorships from '@/components/Sponsorships';
// import Testimonials from '@/components/Testimonials';
import { buttonVariants } from '@/components/ui/button';
// import { TESTIMONIALS_HOME } from '@/constants';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header>
        <HeaderTitle>
          Building a better future through{' '}
          <span className="relative -z-10">
            technology and innovation
            <Image
              src={headerUnderline}
              alt="Header underline"
              className="absolute -bottom-1 lg:-bottom-4 lg:w-full left-0 lg:left-0 -z-20"
            />
          </span>
          .
        </HeaderTitle>
        <HeaderDescription>
          I&apos;m Kunal Kushwaha, Field CTO at{' '}
          <Link
            href="https://www.civo.com"
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Civo
          </Link>
          , where I focus on cloud-native technologies and AI, helping companies
          modernize their infrastructure and adopt innovative solutions.
          I&lsquo;m also the founder of{' '}
          <Link
            href="https://www.wemakedevs.org"
            className="underline hover:no-underline"
            target="_blank"
            rel="nnoreferrer noopener"
          >
            WeMakeDevs
          </Link>
          , a community initiative through which I mentor individuals in tech,
          share practical career advice, and create educational content on
          YouTube. I&apos;m passionate about open source regularly speak at
          conferences on cloud, AI, and developer growth.
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
      <Partners />
      {/* <Testimonials testimonials={TESTIMONIALS_HOME} /> */}
      <Newsletter />
    </div>
  );
}

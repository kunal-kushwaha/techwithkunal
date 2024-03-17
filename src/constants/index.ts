import { testimonial1Author, testimonial1Company } from '@/assets';
import { NavLinksType, Testimonials } from '@/types';

export const NAV_LINKS: NavLinksType = {
  links: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Courses',
      url: '#courses',
    },
    {
      name: 'Sponsorships',
      url: '#sponsorships',
    },
    {
      name: 'Blogs',
      url: '/blogs',
    },
  ],
  cta: {
    name: 'Get in touch',
    url: 'mailto:kunalkushwaha@wemakedevs.org',
  },
};

export const NAV_LINKS_COURSE: NavLinksType = {
  links: [
    {
      name: 'Courses',
      url: '#courses',
    },
    {
      name: 'FAQs',
      url: '#faq',
    },
    {
      name: 'Testimonials',
      url: '#testimonials',
    },
  ],
  cta: {
    name: 'Get in touch',
    url: 'mailto:kunalkushwaha@wemakedevs.org',
  },
};

export const TESTIMONIALS_HOME: Testimonials = [
  {
    text: 'Some great two liner testimonial here. Well, short but crisp is what makes the webpage look good.',
    author: {
      name: 'Candice Wu',
      image: testimonial1Author,
      description: 'Product Manager, Sisyphus',
    },
    company: testimonial1Company,
  },
  {
    text: 'Some great two liner testimonial here. Well, short but crisp is what makes the webpage look good.',
    author: {
      name: 'Candice Wu',
      image: testimonial1Author,
      description: 'Product Manager, Sisyphus',
    },
    company: testimonial1Company,
  },
  {
    text: 'Some great two liner testimonial here. Well, short but crisp is what makes the webpage look good.',
    author: {
      name: 'Candice Wu',
      image: testimonial1Author,
      description: 'Product Manager, Sisyphus',
    },
    company: testimonial1Company,
  },
];

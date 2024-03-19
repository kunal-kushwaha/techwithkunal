import { testimonial1Author, testimonial1Company } from '@/assets';
import { FooterLinks, NavLinksType, Testimonials } from '@/types';

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
      name: 'Blog',
      url: '/blog',
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

export const FOOTER_LINKS: FooterLinks = [
  {
    name: 'Courses',
    links: [
      {
        name: 'Data Structures & Algorithms',
        url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=uLbn3WbjuzBAqmt8',
      },
      {
        name: 'DevOps',
        url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&si=yjQNeFziZFkv9Ed2',
      },
      {
        name: 'Git & GitHub',
        url: 'https://youtu.be/apGV9Kg7ics?si=5Fpqcpa_665QMtOl',
      },
    ],
  },
  {
    name: 'Socials',
    links: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@kunalkushwaha',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/kunalstwt',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kunal-kushwaha/',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/kunalsig/',
      },
    ],
  },
  {
    name: 'Resources',
    links: [
      {
        name: 'Home',
        url: '/',
      },
      {
        name: 'Blog',
        url: '/blog',
      },
      {
        name: 'Sponsorships',
        url: '#sponsorships',
      },
      {
        name: 'Courses',
        url: '#courses',
      },
    ],
  },
];

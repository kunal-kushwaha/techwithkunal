import {
  testimonialKubesphereAuthor,
  testimonialKubesphereCompany,
  testimonialRiseinAuthor,
  testimonialRiseinCompany,
  testimonialStreamAuthor,
  testimonialStreamCompany,
  testimonialTeleportAuthor,
  testimonialTeleportCompany,
} from '@/assets';
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
      openInNewPage: true,
    },
  ],
  cta: {
    name: 'Newsletter',
    url: '/#newsletter',
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
    url: 'mailto:kunal@wemakedevs.org',
  },
};

export const TESTIMONIALS_HOME: Testimonials = [
  {
    text: "We've worked on various collaborations with Kunal's community, all of which have been an extraordinary and profitable experience. Kunal's interest to detail, clear expectations, and innovative work paired with his reach is a fantastic equation. The partnership brought in 100+ chat trials in Q4!",
    author: {
      name: 'Kimmy Leslie',
      image: testimonialStreamAuthor,
    },
    company: testimonialStreamCompany,
  },
  {
    text: 'Partnering with Kunal and his community was one of the highlights for the Teleport team this year. The quality of content is top-notch, the community engagement is very high, and the ROI is there to prove it. It brought in 10K+ new web sessions and 100+ downloads with majority being new users.',
    company: testimonialTeleportCompany,
    author: {
      name: 'Kateryna Ivashchenko',
      image: testimonialTeleportAuthor,
    },
  },
  {
    text: "It's been a great feeling to collaborate with Kunal and his community, and he has made the entire process a pleasure. Kunal has made great contributions to letting more people know the benefits of our services and increase our user base. We got over 11K stars and 5K signups.",
    company: testimonialKubesphereCompany,
    author: {
      name: 'Yun Li',
      image: testimonialKubesphereAuthor,
    },
  },
  {
    text: 'He delivered more than he promised. I am absolutely happy and would keep working with him on a regular basis. It brought in 2000+ signups for our web3 bootcamp!',
    company: testimonialRiseinCompany,
    author: {
      name: 'Ankit Raj',
      image: testimonialRiseinAuthor,
    },
  },
];

export const FOOTER_LINKS: FooterLinks = [
  {
    name: 'Courses',
    links: [
      {
        name: 'Data Structures & Algorithms',
        url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=uLbn3WbjuzBAqmt8',
        openInNewPage: true,
      },
      {
        name: 'DevOps',
        url: 'https://youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&si=yjQNeFziZFkv9Ed2',
        openInNewPage: true,
      },
      {
        name: 'Git & GitHub',
        url: 'https://youtu.be/apGV9Kg7ics?si=5Fpqcpa_665QMtOl',
        openInNewPage: true,
      },
    ],
  },
  {
    name: 'Socials',
    links: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/@kunalkushwaha',
        openInNewPage: true,
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/kunalstwt',
        openInNewPage: true,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kunal-kushwaha/',
        openInNewPage: true,
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/kunalsig/',
        openInNewPage: true,
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
        openInNewPage: true,
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

import {
  courseCourse1,
  testimonialKubesphereAuthor,
  testimonialKubesphereCompany,
  testimonialRiseinAuthor,
  testimonialRiseinCompany,
  testimonialStreamAuthor,
  testimonialStreamCompany,
  testimonialTeleportAuthor,
  testimonialTeleportCompany,
} from '@/assets';
import {
  CoursesFaqs,
  CoursesInfo,
  FooterLinks,
  NavLinksType,
  Testimonials,
} from '@/types';

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

export const COURSES: CoursesInfo = [
  {
    title: 'A short and simple course title will be here',
    description:
      "A brief description of the course will be here. It'll brefily explain what he course is.",
    slug: 'course1',
    about:
      "Here is supposed to be a description about the course that's kinda big but idk how can i type such a big description. Let's see how this goes. ",
    image: courseCourse1,
    link: '#',
    syllabus: [
      {
        title: 'Syllabus first point',
        description:
          'Syllabus first point description explaining the part of the course.',
      },
      {
        title: 'Syllabus second point',
        description:
          'Second points description explaining the part of the course.',
      },
      {
        title: 'Another point of syllabus',
        description:
          'And this paragram will expalin that another point of the syllabus.',
      },
      {
        title: 'I can call it the last part',
        description:
          "And so is this in terms of the description. Interesting, isn't it?",
      },
    ],
    faqs: [
      {
        title: 'First question in FAQ part',
        description:
          'The answer to that question will be here. Depends how big it will be.',
      },
      {
        title: 'And another question here',
        description:
          'and another answer should be here. Kinda tired to write all this lol.',
      },
    ],
    resources: [
      {
        title: 'Resource title should be here',
        description: 'A little description about the resource should be here.',
        url: '#',
      },
      {
        title: 'Another resources title here',
        description: 'and another description for the resource will be here',
        url: '#',
      },
    ],
  },
  {
    title: 'A short and simple course title will be here',
    description:
      "A brief description of the course will be here. It'll brefily explain what he course is.",
    slug: 'course1',
    about:
      "Here is supposed to be a description about the course that's kinda big but idk how can i type such a big description. Let's see how this goes. ",
    image: courseCourse1,
    link: '#',
    syllabus: [
      {
        title: 'Syllabus first point',
        description:
          'Syllabus first point description explaining the part of the course.',
      },
      {
        title: 'Syllabus second point',
        description:
          'Second points description explaining the part of the course.',
      },
      {
        title: 'Another point of syllabus',
        description:
          'And this paragram will expalin that another point of the syllabus.',
      },
      {
        title: 'I can call it the last part',
        description:
          "And so is this in terms of the description. Interesting, isn't it?",
      },
    ],
    faqs: [
      {
        title: 'First question in FAQ part',
        description:
          'The answer to that question will be here. Depends how big it will be.',
      },
      {
        title: 'And another question here',
        description:
          'and another answer should be here. Kinda tired to write all this lol.',
      },
    ],
    resources: [
      {
        title: 'Resource title should be here',
        description: 'A little description about the resource should be here.',
        url: '#',
      },
      {
        title: 'Another resources title here',
        description: 'and another description for the resource will be here',
        url: '#',
      },
    ],
  },
];

export const COURSES_FAQS: CoursesFaqs = [
  {
    title: 'Are all your courses free?',
    description:
      'Yes! All of our courses are and will always be free as well as high quality. You can find those on our YouTube channel.',
  },
  {
    title: 'How do I get my doubts resolved?',
    description:
      'Join our Discord community along with thousands of others and feel free to ask your doubts in the relevant channels.',
  },
  {
    title: 'Is your community beginner friendly?',
    description:
      'Yes! Even non-coders are welcome. Our courses are designed in such a way that anyone can get started with it. Even people who have never programmed before!',
  },
  {
    title: 'Do you provide notes and assignments?',
    description:
      "Yes. It's crucial to revise the topics and self practice after watching the tutorials and we provide materials for the same.",
  },
  {
    title: 'Do you provide mentorship and guidance?',
    description:
      'Yes. That is the highlight of our community. Get expert guidance from industry experts from around the world. You can learn more and get inspired by their stories and roadmaps via the podcast Open Source Cafe.',
  },
];

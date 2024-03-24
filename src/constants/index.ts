import {
  courseCourse1,
  testimonialAnuragh,
  testimonialEkjot,
  testimonialKubesphereAuthor,
  testimonialKubesphereCompany,
  testimonialPrassana,
  testimonialRahul,
  testimonialRiseinAuthor,
  testimonialRiseinCompany,
  testimonialSajjan,
  testimonialSiva,
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
      name: 'About',
      url: '#',
    },
    {
      name: 'Courses',
      url: '#courses',
    },
    {
      name: 'FAQs',
      url: '#faq',
    },
    {
      name: 'Sponsorships',
      url: '#sponsorships',
    },
    {
      name: 'Newsletter',
      url: '#newsletter',
    },
  ],
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

export const TESTIMONIALS_COURSES: Testimonials = [
  {
    text: "Completed @kunalstwt's DevOps bootcamp networking video. Really awesome explanation, got a clear overview of whole networking process. Application layer is perfectly understood.",
    author: {
      name: 'Anurag Pathak',
      image: testimonialAnuragh,
    },
  },
  {
    text: "The way this guy is teaching me Java is just Mind Blowing and Brilliant. I've never thought that these topics would be that much easier. Kudos to @kunalstwt",
    author: {
      name: 'Rahul Kumar',
      image: testimonialRahul,
    },
  },
  {
    text: "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept.",
    author: {
      name: 'Ekjot Singh',
      image: testimonialEkjot,
    },
  },
  {
    text: 'Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every concept was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist.',
    author: {
      name: 'Sajjan Yadav',
      image: testimonialSajjan,
    },
  },
  {
    text: 'Finally, completed 4 hour long video on computer networking. Amazing content @kunalstwt. Thanks for creating such an educational content for us 🙌🙌',
    author: {
      image: testimonialPrassana,
      name: 'Prasanna',
    },
  },
  {
    text: 'What an explanation 🔥 on recursion! This dsa course is just absolutely amazing. Thank you Kunal Kushwaha for this amazing course.',
    author: {
      name: 'Siva',
      image: testimonialSiva,
    },
  },
];

export const FOOTER_LINKS: FooterLinks = [
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
        name: 'GitHub',
        url: 'https://github.com/kunal-kushwaha',
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
    name: 'Other',
    links: [
      {
        name: 'Reddit',
        url: 'https://www.reddit.com/user/KunalsReddit/',
      },
      {
        name: 'YouTube Hindi',
        url: 'https://www.youtube.com/@KunalHindi',
      },
      {
        name: 'GitHub Stars',
        url: 'https://stars.github.com/profiles/kunal-kushwaha/',
      },
      {
        name: 'Credly',
        url: 'https://www.credly.com/users/kunalkushwaha/badges',
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
        url: '/courses',
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
    title: 'Are all your courses free of cost?',
    description:
      'Yes, absolutely. My courses are meticulously curated to offer high-quality content without any cost to you.',
  },
  {
    title: 'Do you provide notes and assignments?',
    description:
      'Certainly. You can access comprehensive notes and engaging assignments conveniently located in the resources section of each course page.',
  },
  {
    title: 'Are the courses applicable to solve real-world problems?',
    description:
      'Absolutely. I prioritize hands-on learning with practical, real-world examples integrated throughout each course, ensuring applicability to real-world scenarios.',
  },
  {
    title: 'Are there any prerequisites?',
    description:
      'My courses are designed to be inclusive, with minimal entry barriers. Visit the course page to explore any prerequisites, if applicable, and embark on your learning journey seamlessly.',
  },
];

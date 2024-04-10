import {
  courseDevops,
  courseDsa,
  courseGit,
  courseSinglestore,
  testimonialAnuragh,
  testimonialBootdevAuthor,
  testimonialBootdevCompany,
  testimonialEkjot,
  testimonialIrffan,
  testimonialKodecloudAuthor,
  testimonialKodecloudCompany,
  testimonialKomodorAuthor,
  testimonialKomodorCompany,
  testimonialKubeshphereAuthor2,
  testimonialKubesphereAuthor,
  testimonialKubesphereCompany,
  testimonialPrassana,
  testimonialRahul,
  testimonialRiseinAuthor,
  testimonialRiseinCompany,
  testimonialSajjan,
  testimonialSiva,
  testimonialSlashdataAuthor,
  testimonialSlashdataCompany,
  testimonialStreamAuthor,
  testimonialStreamCompany,
  testimonialTeleportAuthor,
  testimonialTeleportCompany,
  testimonialWilcoAuthor,
  testimonialWilcoCompany,
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
    {
      name: 'Newsletter',
      url: '#newsletter',
    },
  ],
};

export const NAV_LINKS_COURSES: NavLinksType = {
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

export const NAV_LINKS_COURSE: NavLinksType = {
  links: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Resources',
      url: '#resources',
    },
    {
      name: 'Syllabus',
      url: '#syllabus',
    },
    {
      name: 'Blog',
      url: '/blog',
      openInNewPage: true,
    },
  ],
  cta: {
    name: 'Register',
    url: '#register',
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
  {
    text: 'It was extremely successful. We got around 1700 signups through our campaigns. Thank you for everything, Kunal. You have a wonderful community.',
    company: testimonialWilcoCompany,
    author: {
      name: 'Alexandra Macias',
      image: testimonialWilcoAuthor,
    },
  },
  {
    text: "Fantastic, looking forward to more. I think you&'re doing great, I&'d love to continue swinging by the channel whenever you feel it&'s appropriate. Boot.dev has a YouTube channel now, so I&'d love to have you on there as well.",
    company: testimonialBootdevCompany,
    author: {
      name: 'Lane',
      image: testimonialBootdevAuthor,
    },
  },
  {
    text: 'Very efficient, smooth communication and focused work. 15+ twitter followers and 30 + starts in two days!',
    company: testimonialKubesphereCompany,
    author: {
      name: 'Calvin Yu',
      image: testimonialKubeshphereAuthor2,
    },
  },
  {
    text: 'AMAZING!!! After every activity with Kunal my community grows by 100s and the same goes for GH stars!',
    company: testimonialKomodorCompany,
    author: {
      name: 'Udi Hofesh',
      image: testimonialKomodorAuthor,
    },
  },
  {
    text: 'Excellent! So there was a sudden spike in audience from YT redirected to our site after the collaboration and that was really good to see.',
    company: testimonialKodecloudCompany,
    author: {
      name: 'Prabhjyot Kaur',
      image: testimonialKodecloudAuthor,
    },
  },
  {
    text: 'The collab was smooth and very fruitful! We got 283 qualified responses for our survey!',
    company: testimonialSlashdataCompany,
    author: {
      name: 'Nurpari Damirova',
      image: testimonialSlashdataAuthor,
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
    text: 'Hii Kunal! Just wanted to thank you. In my freshman year you introduced me to open source and In my 2nd year i made it to GSoC with @RocketChat',
    author: {
      name: 'Irffan',
      image: testimonialIrffan,
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
        name: 'GitHub',
        url: 'https://github.com/kunal-kushwaha',
        openInNewPage: true,
      },
      {
        name: 'Reddit',
        url: 'https://www.reddit.com/user/KunalsReddit/',
        openInNewPage: true,
      },
      {
        name: 'YouTube Hindi',
        url: 'https://www.youtube.com/@KunalHindi',
        openInNewPage: true,
      },
      {
        name: 'Credly',
        url: 'https://www.credly.com/users/kunalkushwaha/badges',
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
        openInNewPage: true,
      },
      {
        name: 'Blog',
        url: '/blog',
        openInNewPage: true,
      },
      {
        name: 'Sponsorships',
        url: '#sponsorships',
        openInNewPage: true,
      },
      {
        name: 'Courses',
        url: '/courses',
        openInNewPage: true,
      },
    ],
  },
];

export const COURSES: CoursesInfo = [
  {
    title: 'Introduction to Gen AI and Retrieval Augmented Generation (RAG)',
    hasPage: true,
    description:
      "In this comprehensive course, you'll delve into the cutting-edge realm of Gen AI and Retrieval Augmented Generation (RAG), with a focus on leveraging SingleStore technology.",
    about:
      "Explore the fundamentals of AI, emphasizing the critical role of data, and uncover the intricacies of RAG technology. From understanding semantic search and vectors to mastering the construction of Gen AI applications using RAG architecture and SingleStore, this course equips you with the knowledge and tools necessary to navigate the forefront of AI innovation. By the course's end, you'll be proficient in deploying your creations to production, ready to make your mark in the ever-evolving landscape of artificial intelligence.",
    image: courseSinglestore,
    introVideoEmbedLink:
      'https://www.youtube.com/embed/_CgBmuZ99M8?si=7Dsx-BCN2htBmVOX',
    slug: 'genai-rag-singlestore',
    resources: [
      {
        title: 'Playlist link',
        description: 'Access the course material here',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnrslTujkMYzx-GuVrpVpu5_',
      },
      {
        title: 'Sign up to SingleStore',
        description:
          'Sign up to SingleStore to learn in a production ready environment',
        url: 'https://msql.co/S2-intro-to-RAG',
      },
      {
        title: 'Sign up to Pieces',
        description: 'Elevate your note taking journey with this AI tool',
        url: 'https://pieces.app/?utm_source=kunal-kushwaha&utm_medium=referral&utm_campaign=kunal-partner-site',
      },
      {
        title: 'Code repository link',
        description: 'Access lecture code, notes and assignments',
        url: 'https://github.com/kunal-kushwaha/Intro-to-Gen-AI-and-RAG',
      },
    ],
    syllabus: [
      {
        title: 'Intro to Gen AI and Retrieval Augmented Generation (RAG)',
        points: [
          'The most important part of AI - Data.',
          'Making AI apps that are data-aware.',
          'What is RAG?',
          'Is there an alternative to RAG?',
          'What do you need to build a RAG based app?',
        ],
      },
      {
        title: 'Intro to Semantic Search, Vectors and Vector Databases',
        points: [
          'What is semantic search and Vectors.',
          'What are vector indexes?',
          'What is a contextual database?',
          'What to look for in a database?',
          'SingleStore story and roadmap. A short hands on session',
        ],
      },
      {
        title: 'How to build a Gen AI app with RAG',
        points: [
          'Intro to the RAG architecture and libraries - LangChain and LlamaIndex.',
          'Building the base layer - Intro to Notebooks and creating embeddings and storing them in a database.',
          'Hybrid search and retrieval of contextual data.',
          'Choosing your LLMs - Vertex AI, Bedrock, etc.',
          'Building the UI layer - SingleStore Elegance SDK',
        ],
      },
      {
        title: 'Deploying your app to production',
        points: [
          'Deploy your project in a highly scalable environment.',
          'Optimize for scalability and efficiency in deployment.',
          'Ensure seamless integration with existing production environments.',
        ],
      },
    ],
  },
  {
    title: 'Data Structures & Algorithms in Java',
    hasPage: true,
    description:
      'Get interview-ready with this course that has no prerequisites and is designed to make you an expert in solving easy to hard LeetCode problems with ease',
    slug: 'dsa',
    about:
      'Get interview-ready with this course that has no prerequisites and is designed to make you an expert in solving easy to hard LeetCode problems with ease. Master the thought process behind solving problems, and clear interviews of top tier companies.',
    image: courseDsa,
    introVideoEmbedLink:
      'https://www.youtube.com/embed/rZ41y93P2Qo?si=qOxeJ3kPTkYbER7g',
    resources: [
      {
        title: 'Playlist',
        description: 'Access the course material here',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
      },
      {
        title: 'Sign up to Pieces',
        description: 'Elevate your note taking journey with this AI tool',
        url: 'https://pieces.app/?utm_source=kunal-kushwaha&utm_medium=referral&utm_campaign=kunal-partner-site',
      },
      {
        title: 'Notes & assignments',
        description: 'Access lecture code, notes and assignments',
        url: 'https://github.com/kunal-kushwaha/DSA-Bootcamp-Java',
      },
    ],
    syllabus: [
      {
        title: 'Introduction to programming',
        points: 'Types of languages. Memory management.',
      },
      {
        title: 'Flow of program',
        points: 'Flowcharts, pattern questions, and pseudocode.',
      },
      {
        title: 'Introduction to Java',
        points:
          'How Java works, setup installation, input and output, conditionals and loops, data types, and coding best practices.',
      },
      {
        title: 'Functions / Methods',
        points:
          'Introduction to functions, scoping, shadowing, functional arguments, function overloading.',
      },
      {
        title: 'Arrays and ArrayList',
        points:
          'How arrays work in Java, memory management, input and output, ArrayList introduction.',
      },
      {
        title: 'Searching',
        points: 'Linear, binary, modified binary search.',
      },
      {
        title: 'Sorting',
        points:
          'Insertion, selection, bubble, cyclic, merge, quick, count, radix, and heap sort.',
      },
      {
        title: 'Time and space complexity',
        points:
          'Introduction, various cases, linear recurrence, divide-n-conquer recurrence, notations, solving recurrences, space complexity, NP-completeness.',
      },
      {
        title: 'Mathematics',
        points:
          'Bitwise operators, range of data types, prime numbers, factors, modulo properties, number theory.',
      },
      {
        title: 'Recursion',
        points:
          'Introduction, how to master recursion, flow of program, tree building, tail recursion, sorting, string, array, pattern, subset questions.',
      },
      {
        title: 'Backtracking',
        points:
          'Introduction, Maze problems, N-queens, N-knights, sudoku solver.',
      },
      {
        title: 'Object-Oriented Programming',
        points:
          'Introduction, classes, objects, this keyword, properties, overloading, overriding, static, packages, access control, interfaces, abstract classes, annotations, singleton class, keywords, object class, generics, exception handling, vector class, collections framework, lambda expressions, enums.',
      },
      {
        title: 'Linked List',
        points:
          'Introduction, singly, doubly, circular, fast and slow pointer, cycle detection, reversal of Linked List, Linked List with recursion.',
      },
      {
        title: 'Stacks and Queues',
        points:
          'Introduction, push efficient, pop efficient, queue using stack and vice versa, circular queue.',
      },
      {
        title: 'Trees',
        points:
          'Introduction to binary trees, binary search trees, DFS, BFS, AVL trees, segment trees.',
      },
      {
        title: 'Hashmaps',
        points:
          'Introduction, theory, comparisons, limitations, map using Linked List, map using Hash, sorting, chaining, probing, Huffman-encoder.',
      },
      {
        title: 'Dynamic programming',
        points:
          'Introduction, recursion, recursion + dp, iteration, iteration + space optimized, complexity analysis, 0/1 Knapsack, subset questions, unbounded knapsack, subsequence questions, string dp.',
      },
      {
        title: 'Heaps',
        points:
          'Introduction, theory, priority queue, heapsort, two heaps method, k-way merge, top-k elements, interval problems.',
      },
      {
        title: 'Graph theory',
        points:
          "Introduction, BFS, DFS, components, minimum spanning trees, Kruskal, Prims, Dijkstra's shortest path, topological sort, Bellman ford, A* pathfinding.",
      },
      {
        title: 'Additional topics',
        points:
          "Greedy algorithms, tries, sliding window, two pointer, Kadane's algorithm, and more!",
      },
    ],
  },
  {
    title: 'DevOps Bootcamp',
    hasPage: true,
    description:
      'Learn about DevOps, starting from the basics, going in depth into every topic, mastering multiple in-demand tools.',
    slug: 'devops',
    about:
      "In this course, you will gain hands-on experience with a wide range of DevOps tools, from basic to advanced, ensuring you're well-equipped for the industry. Engage in practical projects that solidify your learning and prepare you for real-world applications.",
    image: courseDevops,
    introVideoEmbedLink:
      'https://www.youtube.com/embed/ZbG0c87wcM8?si=7YdqdBa9mq1J88w9',
    resources: [
      {
        title: 'Playlist',
        description: 'Access the course material here',
        url: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak',
      },
      {
        title: 'Sign up to Pieces',
        description: 'Elevate your note taking journey with this AI tool',
        url: 'https://pieces.app/?utm_source=kunal-kushwaha&utm_medium=referral&utm_campaign=kunal-partner-site',
      },
      {
        title: 'Notes & Assignments',
        description: 'Access lecture code, notes and assignments',
        url: 'https://github.com/kunal-kushwaha/DevOps-Bootcamp',
      },
    ],
    syllabus: [
      {
        title: 'Introduction to networking',
        points:
          'Networking fundamentals, OSI layer protocols, port forwarding, how the internet works, command line tools, and more.',
      },
      {
        title: 'Command line tools',
        points:
          'Various command line tools, bash scripting, regex, introduction to git, and more.',
      },
      {
        title: 'Kubernetes',
        points:
          'Introduction, architecture, set-up, objects, networking, storage, HA, monitoring, logging, production-ready applications.',
      },
      {
        title: 'Servers',
        points: 'Introduction to web-servers, Nginx, and more.',
      },
      {
        title: 'Infrastructure as code',
        points:
          'Infrastructure provisioning, Terraform, Pulumi, configuration management, and more.',
      },
      {
        title: 'Service mesh',
        points: 'Istio, Envoy, Linkerd, and more.',
      },
      {
        title: 'Working with cloud providers',
        points: 'Learn about cloud providers, design patterns, and more.',
      },
      {
        title: 'Chaos engineering',
        points: 'The next step in testing.',
      },
      {
        title: 'Introduction to Linux',
        points:
          'Learn about the essentials of working with Linux, including some important commands.',
      },
      {
        title: 'Docker',
        points:
          'Introduction to containers, hands-on demos, concepts, architecture, images, networking, best practices, development profiles, Docker Compose, Docker Swarm.',
      },
      {
        title: 'GoLang',
        points: 'Complete GoLang tutorial.',
      },
      {
        title: 'CI/CD',
        points:
          'Setting up a CI/CD pipeline, GitHub Actions, Circle CI, and more.',
      },
      {
        title: 'Monitoring and logging',
        points:
          'Monitoring tools and practices, Prometheus, Thanos, Grafana, Jaeger, New Relic, and more.',
      },
      {
        title: 'GitOps',
        points:
          'Manage infrastructure and application configurations using Git.',
      },
      {
        title: 'Testing',
        points: 'Create robust applications with application testing.',
      },
      {
        title: 'Cloud native tools deep dive',
        points:
          'Navigating the Cloud Native tools landscape with a hands-on deep dive to get you started with the use-cases and contributor journey of various projects',
      },
    ],
  },
  {
    title: 'Complete Git and GitHub',
    description:
      'Kick-off your Open Source journey with the complete Git & GitHub tutorial covering all the fundamentals and advance concepts with a hands-on approach.',
    slug: '',
    about: '',
    image: courseGit,
    link: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
    introVideoEmbedLink:
      'https://www.youtube.com/embed/apGV9Kg7ics?si=2uR5qBk46yPyHLeT',
    resources: [],
    syllabus: [],
    hasPage: false,
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

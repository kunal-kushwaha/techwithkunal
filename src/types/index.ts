import { StaticImageData } from 'next/image';

type NavLinkType = {
  name: string;
  url: string;
  openInNewPage?: boolean;
};

export type NavLinksType = {
  links: NavLinkType[];
  cta?: NavLinkType;
};

export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface GeneralComponentWithChild extends GeneralComponent {
  children: React.ReactNode;
}

export interface NavbarProps extends GeneralComponent { }

export interface HeaderProps extends GeneralComponentWithChild { }

export interface HeaderTitleProps extends GeneralComponentWithChild { }

export interface HeaderDescriptionProps extends GeneralComponentWithChild { }

export interface HeaderCtaProps extends GeneralComponentWithChild { }

export interface HeaderImageProps extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface AboutProps extends GeneralComponent { }

export interface CoursesProps extends GeneralComponent { }

export interface SponsorshipsProps extends GeneralComponent { }

export interface CoursesCardsProps extends GeneralComponent { }

export interface CardProps extends GeneralComponentWithChild { }

export interface CardTitleProps extends GeneralComponentWithChild { }

export interface CardDescriptionProps extends GeneralComponentWithChild { }

export interface CardCtaProps extends GeneralComponentWithChild { }

export interface CardImageProps extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface SocialProofProps extends GeneralComponent { }

export interface CoursesSponsorshipsProps extends GeneralComponent { }

export interface CourseHeaderProps extends GeneralComponent {
  title: string;
  description: string;
  introVideoEmbedLink: string;
}

export interface CourseResourcesProps extends GeneralComponent {
  resources: CourseSingleResource[];
}

export interface CourseAboutProps extends GeneralComponent {
  about: string;
}

export interface CourseSyllabusCardProps extends GeneralComponent {
  syllabus: CourseSyllabusPoint;
  number: number;
}

export interface CourseSyllabusProps extends GeneralComponent {
  syllabus: CourseSyllabusPoint[];
}

export interface CoruseRegisterProps extends GeneralComponent {
  slug: string;
}

type Testimonial = {
  text: string;
  author: {
    name: string;
    image: StaticImageData;
  };
  company?: StaticImageData;
};

export type Testimonials = Testimonial[];

export interface TestimonialsProps extends GeneralComponent {
  title?: string;
  description?: string;
  testimonials: Testimonials;
}

export interface FooterProps extends GeneralComponent { }

type SingleFooterLink = {
  name: string;
  url: string;
  isNew?: boolean;
  openInNewPage?: boolean;
};

type FooterLinksSection = {
  name: string;
  links: SingleFooterLink[];
};

export type FooterLinks = FooterLinksSection[];

export interface NewsletterProps extends GeneralComponent { }

type CourseSyllabusPoint = {
  title: string;
  points: string[] | string;
};

type CourseSingleResource = {
  title: string;
  description: string;
  url: string;
};

type SingleFaq = {
  title: string;
  description: string;
};

export type CoursesFaqs = SingleFaq[];

export interface FAQsProps extends GeneralComponent {
  title: string;
  description: string;
  items: SingleFaq[];
}

type CourseInfo = {
  title: string;
  slug: string;
  description: string;
  about: string;
  image: StaticImageData;
  link?: string;
  hasPage?: boolean;
  introVideoEmbedLink: string;
  syllabus: CourseSyllabusPoint[];
  resources: CourseSingleResource[];
};

export type CoursesInfo = CourseInfo[];

export type PartnerData = {
  image: StaticImageData;
  logo: StaticImageData;
  name: string;
  quote: string;
  author: string;
}
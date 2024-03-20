import { StaticImageData } from 'next/image';

type NavLinkType = {
  name: string;
  url: string;
  openInNewPage?: boolean;
};

export type NavLinksType = {
  links: NavLinkType[];
  cta: NavLinkType;
};

export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface GeneralComponentWithChild extends GeneralComponent {
  children: React.ReactNode;
}

export interface NavbarProps extends GeneralComponent {}

export interface HeaderProps extends GeneralComponentWithChild {}

export interface HeaderTitleProps extends GeneralComponentWithChild {}

export interface HeaderDescriptionProps extends GeneralComponentWithChild {}

export interface HeaderCtaProps extends GeneralComponentWithChild {}

export interface HeaderImageProps extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface AboutProps extends GeneralComponent {}

export interface CoursesProps extends GeneralComponent {}

export interface SponsorshipsProps extends GeneralComponent {}

type Testimonial = {
  text: string;
  author: {
    name: string;
    image: StaticImageData;
  };
  company: StaticImageData;
};

export type Testimonials = Testimonial[];

export interface TestimonialsProps extends GeneralComponent {
  testimonials: Testimonials;
}

export interface FooterProps extends GeneralComponent {}

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

export interface NewsletterProps extends GeneralComponent {}

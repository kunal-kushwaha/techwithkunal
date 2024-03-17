import { StaticImageData } from 'next/image';

type NavLinkType = {
  name: string;
  url: string;
};

export type NavLinksType = {
  links: NavLinkType[];
  cta: NavLinkType;
};

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface CoursesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export interface SponsorshipsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

type Testimonial = {
  text: string;
  author: {
    name: string;
    description: string;
    image: StaticImageData;
  };
  company: StaticImageData;
};

export type Testimonials = Testimonial[];

export interface TestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  testimonials: Testimonials;
}

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

type SingleFooterLink = {
  name: string;
  url: string;
  isNew?: boolean;
};

type FooterLinksSection = {
  name: string;
  links: SingleFooterLink[];
};

export type FooterLinks = FooterLinksSection[];

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

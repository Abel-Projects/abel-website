/** Toggle to false when Portfolio / Media Kit are ready to launch. */
export const HIDDEN_PAGES = {
  portfolio: true,
  mediaKit: true,
} as const;

type PageKey = keyof typeof HIDDEN_PAGES;

export type NavItem = {
  name: string;
  href: string;
  page?: PageKey;
};

const isVisible = (item: NavItem) => !item.page || !HIDDEN_PAGES[item.page];

const headerNavAll: NavItem[] = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio", page: "portfolio" },
  { name: "Overview Deck", href: "/overview-deck" },
  { name: "Media/Brand Kit", href: "/media-kit", page: "mediaKit" },
];

const footerNavAll: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio", page: "portfolio" },
  { name: "About", href: "/about" },
  { name: "Overview Deck", href: "/overview-deck" },
  { name: "Media Kit", href: "/media-kit", page: "mediaKit" },
];

export const headerNavigation = headerNavAll.filter(isVisible);
export const footerNavigation = footerNavAll.filter(isVisible);

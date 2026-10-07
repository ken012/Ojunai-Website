/**
 * Ojunai Technologies Inc. — product portfolio.
 * Single source of truth for the Header nav, Footer, /products index,
 * product profile pages, and homepage portfolio grid.
 *
 * Add a new product here and it appears everywhere on Ojunai.com automatically.
 */

export type ProductStatus = 'live' | 'early-access' | 'pilot' | 'coming-soon';

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  navDescription: string;
  description: string;
  status: ProductStatus;
  /** Corporate-hosted profile page inside ojunai.com */
  profileUrl: string;
  /** Dedicated marketing website (if any). Null when the profile page IS the marketing site. */
  websiteUrl: string | null;
  /** Direct app URL to sign in / open the product. */
  appUrl: string | null;
  /** Accent color for cards, badges, sub-header. */
  accent: string;
  accentSoft: string;
  /** Single-glyph badge shown on cards when no logo asset is available yet. */
  glyph: string;
  /** Path under /brand/ for the product's icon PNG, if one exists. Falls back to glyph. */
  iconAsset: string | null;
}

export const products: Product[] = [
  {
    slug: 'ojunai-inventory',
    name: 'Ojunai Inventory',
    category: 'Business Operations',
    tagline: 'Inventory, sales, credit and everyday operations for SMEs — from a chat.',
    navDescription: 'Inventory and everyday business operations',
    description:
      'A conversational business operations platform. Track inventory, log sales, manage credit and debts, run expenses, and get daily summaries — via WhatsApp, Telegram, or Messenger, backed by a clean web dashboard.',
    status: 'live',
    profileUrl: '/products/ojunai-inventory',
    websiteUrl: '/products/ojunai-inventory',
    appUrl: 'https://app.ojunai.com',
    accent: '#4F46E5',
    accentSoft: '#EEF2FF',
    glyph: 'I',
    iconAsset: '/brand/icon-haloed-256.png',
  },
  {
    slug: 'commerce-ai',
    name: 'Commerce AI',
    category: 'Conversational Commerce',
    tagline: 'Run your online store by chat — with deliberate control over every action.',
    navDescription: 'Run and understand your online store by chat',
    description:
      'A conversational operations layer for Shopify, WooCommerce, Paystack, and Flutterwave. Merchants and their teams can understand sales, manage stock, work with orders, and get grounded analysis from WhatsApp or Telegram.',
    status: 'early-access',
    profileUrl: '/products/commerce-ai',
    websiteUrl: null,
    appUrl: null,
    accent: '#0EA5E9',
    accentSoft: '#E0F2FE',
    glyph: 'C',
    iconAsset: null,
  },
  {
    slug: 'ev-fastroute',
    name: 'EV FastRoute',
    category: 'EV Mobility',
    tagline: 'Smarter routing and charging for electric-vehicle drivers and fleets.',
    navDescription: 'Plan complete EV journeys and charging stops',
    description:
      'An EV road-trip planner that balances driving time, charging detours, charger speed, station-data confidence, connector compatibility, and real-world vehicle range.',
    status: 'coming-soon',
    profileUrl: '/products/ev-fastroute',
    websiteUrl: null,
    appUrl: null,
    accent: '#10B981',
    accentSoft: '#ECFDF5',
    glyph: 'E',
    iconAsset: '/brand/ev-fastroute-icon.png',
  },
  {
    slug: 'flash-appt',
    name: 'FlashAppt',
    category: 'Appointments Marketplace',
    tagline: 'A marketplace for last-minute appointment openings — filled instantly.',
    navDescription: 'Fill cancellations, retain customers, and find nearby openings',
    description:
      'FlashAppt helps merchants recover cancellations, understand appointment demand, and earn direct repeat business. Consumers can discover nearby openings, save favourites, create appointment watches, and book again after a completed visit.',
    status: 'pilot',
    profileUrl: '/products/flash-appt',
    websiteUrl: 'https://flashappt.com',
    appUrl: 'https://flashappt.com/merchant/signup',
    accent: '#6D28D9',
    accentSoft: '#F5F3FF',
    glyph: 'F',
    iconAsset: '/brand/flashappt-mark-192.png',
  },
];

/**
 * Ojunai Technologies Inc. — corporate identity used across the site.
 * Incorporated in Ontario, Canada. Operates FlashAppt directly.
 *
 * The Nigerian entity OJUNAI AI LTD (RC 9585647) operates Ojunai Inventory
 * and is exposed separately below.
 *
 * Registration ID for the Ontario Inc. is TBD — flag before final Terms sign-off.
 */
export const corporate = {
  name: 'Ojunai Technologies Inc.',
  shortName: 'Ojunai Technologies',
  jurisdiction: 'Ontario, Canada',
  addressCountry: 'CA',
  tagline: 'We build software for the problems people deal with every day.',
  descriptionShort:
    'Ojunai Technologies builds and operates focused software products across business operations, commerce, mobility, and everyday services.',
  descriptionLong:
    'Ojunai Technologies Inc. is a product company. We design, build, and operate our own software — starting with tools for small businesses, and now expanding across commerce, mobility, and scheduling. Every product is built to be useful on the first day someone opens it.',
  contactEmail: 'contact@ojunai.com',
  pressEmail: 'contact@ojunai.com',
  careersEmail: 'careers@ojunai.com',
  operatingEntity: {
    name: 'OJUNAI AI LTD',
    identifier: 'RC 9585647',
    jurisdiction: 'Nigeria',
    /** Which Ojunai Technologies products this entity operates. */
    operates: ['ojunai-inventory'],
  },
};

export function statusLabel(status: ProductStatus): string {
  if (status === 'live') return 'Live';
  if (status === 'early-access') return 'Early Access';
  if (status === 'pilot') return 'Pilot';
  return 'Coming Soon';
}

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

// Flat, plain-English pricing cards with Local SEO & Multi-Town Expansion front and center.
export interface Plan {
  name: string;
  price: string;
  per: string;
  subnote?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Starter Site & Google Setup',
    price: '$1,200',
    per: 'one-time',
    subnote: '$600 deposit to start + $600 at launch · Or finance monthly',
    cta: 'Get started',
    features: [
      'Up to 3 fast, mobile-friendly pages',
      'Google Business Profile & map connection',
      'Tap-to-call & simple quote request form',
      'Local search groundwork for your home town',
      'Domain, security & hosting setup',
      '100% yours once paid in full',
    ],
  },
  {
    name: 'Local Growth Site',
    price: '$2,500',
    per: 'one-time',
    subnote: '$1,250 deposit to start + $1,250 at launch · Or finance monthly',
    cta: 'Get a written quote',
    featured: true,
    features: [
      'Up to 10 Service + Neighboring Town SEO pages',
      'Full Google Maps profile rebuild, aiming for the Top 3',
      'Automatic 5-star Google review text system',
      'Online "Ballpark Price" calculator',
      'Instant missed-call text-back setup',
      'Credit card, Text-to-Pay & customer financing',
    ],
  },
  {
    name: 'Monthly SEO & Town Expansion',
    price: '$399',
    per: '/ month',
    subnote: 'Billed monthly · Cancel anytime, zero long contracts',
    cta: 'Take over nearby towns',
    features: [
      'New neighboring town & service pages added monthly',
      'Weekly Google Map Pack posts & job photo geo-tags',
      'Automatic 5-star review text automation',
      'Monthly calls, map rankings & town growth report',
      'Fast hosting, daily backups & routine site updates',
      'Priority local tech support when you need help',
    ],
  },
  {
    name: 'Custom Payments & Tools',
    price: 'Fixed',
    per: 'written quote',
    subnote: '50% deposit to start · Milestone or financing available',
    cta: 'Tell us what you need',
    features: [
      'Driveway credit card, Apple Pay & customer financing',
      'Online stores, booking & customer portals',
      'Automatic quote chasers & past-customer text blasts',
      'One-page job, expense & profit tracker',
      'Custom software built around your crew',
    ],
  },
];

export const addons: [string, string][] = [
  ['Google Business Profile & Map Pack overhaul', '$299'],
  ['5-Town Local SEO Expansion Pack (5 custom town pages)', '$499'],
  ['Automated 5-star Google review text system', '$249'],
  ['Instant missed-call text-back setup', 'from $249'],
  ['Credit card, Text-to-Pay & customer financing setup', 'from $249'],
  ['Online ballpark price calculator', 'from $299'],
  ['Automatic quote chaser & past-customer text setup', 'from $249'],
  ['Business email setup (@yourcompany.com)', 'from $149'],
  ['Basic hosting, backups & care plan', '$149 / mo'],
  ['Local IT & tech support', '$75 / hr'],
];

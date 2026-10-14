// Pricing cards and add-ons on the home page.
export interface Plan {
  name: string;
  price: string;
  per: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  { name: 'Starter', price: '$499', per: 'one-time', cta: 'Get started',
    features: ['One-page, mobile-first site', 'Quote request form & click-to-call', 'Google-ready SEO basics', 'Domain & hosting setup'] },
  { name: 'Growth', price: '$999', per: 'one-time', cta: 'Book a consult', featured: true,
    features: ['Up to 5 custom pages', 'Instant quote calculator', 'Google Business Profile setup', 'Animations & premium design', 'Local SEO service-area pages'] },
  { name: 'Care plan', price: '$79', per: '/ month', cta: 'Add care',
    features: ['Updates & new content', 'Hosting, domain & email help', 'IT questions answered', 'Monthly check-up'] },
];

export const addons: [string, string][] = [
  ['Quote calculator', 'from $199'],
  ['Google Business setup', '$149'],
  ['Spreadsheet system', 'from $99'],
  ['Automation', 'from $149'],
  ['IT support', '$60 / hr'],
];

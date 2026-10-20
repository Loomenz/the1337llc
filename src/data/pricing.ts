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
  { name: 'Starter', price: '$1,200', per: 'one-time', cta: 'Get started',
    features: ['Up to 3 mobile-first pages', 'Quote request form & click-to-call', 'Google-ready SEO basics', 'Domain, hosting & SSL setup'] },
  { name: 'Growth', price: '$2,500', per: 'one-time', cta: 'Book a consult', featured: true,
    features: ['Up to 8 custom pages', 'Instant quote calculator', 'Google Business Profile setup', 'Animations & premium design', 'Local SEO service-area pages'] },
  { name: 'Care plan', price: '$149', per: '/ month', cta: 'Add care',
    features: ['Hosting, SSL & backups', 'Small edits each month', 'Google Business posts', 'Monthly check-up report'] },
  { name: 'Growth plan', price: '$299', per: '/ month', cta: 'Grow with us',
    features: ['Everything in Care', 'A new service or town page monthly', 'Automatic review requests', 'Monthly ranking & calls report', 'Quarterly strategy call'] },
];

export const addons: [string, string][] = [
  ['Quote calculator', 'from $199'],
  ['Google Business setup', '$149'],
  ['Spreadsheet system', 'from $99'],
  ['Automation', 'from $149'],
  ['IT support', '$60 / hr'],
];

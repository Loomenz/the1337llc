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

// Never-miss-a-customer tools, sold alone or in the Front Desk package.
export const frontDesk = {
  name: 'Front Desk package',
  setup: '$1,000',
  monthly: '$249',
  includes: ['Missed-call text-back', 'Customer & lead list (CRM) with every call and text', 'Online booking + reminder texts', 'Review requests after every job', 'You keep your phone number'],
};

// One-time setup jobs: quick wins owners can't easily do themselves.
export const setups: [string, string, string][] = [
  ['Business email', 'you@yourbusiness.com on Google Workspace, set up so it lands in inboxes, not spam. Google bills about $7 per person a month.', '$150'],
  ['Google Business Profile setup', 'Categories, services, hours, service area, photos and the link to your site.', '$300'],
  ['Online payments + text-to-pay', 'Stripe or Square, so customers pay from a link on their phone.', '$250'],
  ['Invoicing setup', 'QuickBooks or Stripe invoices with your logo, terms and reminders.', '$300'],
  ['Jobber or Housecall Pro setup', 'Already use one? We set it up properly and load your customers.', '$500'],
  ['Digital forms + e-signatures', 'Intake forms, estimates and contracts signed on a phone.', '$300'],
  ['Tech cleanup', 'Domain, logins and accounts sorted out so you know who owns what.', '$150'],
];

// Monthly add-ons beyond the care plans.
export const monthlyAddons: [string, string, string][] = [
  ['Google Business management', 'Posts, photos, review replies and profile updates every month.', '$149/mo'],
  ['Email newsletter', 'Set up, then a monthly email to past customers.', '$400 + $99/mo'],
];

// Built for one business, quoted after a call.
export const custom: [string, string, string][] = [
  ['Owner dashboard', 'Calls, leads, bookings and money on one screen.', 'from $2,500'],
  ['Custom quote or invoice tool', 'Built around how you price and bill.', 'from $1,500'],
];

export const addons: [string, string][] = [
  ['Quote calculator', 'from $199'],
  ['Spreadsheet system', 'from $99'],
  ['Automation', 'from $149'],
  ['IT support', '$60 / hr'],
];

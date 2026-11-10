// Every price on the site. The price sheet (/pricing/) is built from this file,
// grouped by the same five buckets as data/buckets.ts. Change a price here only.
// Each item is listed once. Nothing here is repeated in another group.

// The four places most owners start. Shown as cards at the top of the price sheet.
export interface Starter {
  name: string;
  price: string;
  per: string; // what the price is: "one time", "setup + monthly"
  what: string;
  includes: string[];
  cta: string;
  href: string;
  flag?: string;
}

export const starters: Starter[] = [
  {
    name: 'Starter website', price: '$1,200', per: 'one time',
    what: 'A fast site built for phones that gets people to call or book.',
    includes: ['Up to 3 pages', 'Contact form and tap-to-call', 'Set up to show on Google', 'Domain, hosting and security set up'],
    cta: 'Get a website quote', href: '/contact/?fix=site',
  },
  {
    name: 'Get found on Google', price: '$300 + $149/mo', per: 'setup, then monthly',
    what: 'Your Google profile fixed, then kept fresh every month.',
    includes: ['Google Business Profile set up right', 'Posts, photos and review replies monthly', 'Report on what moved', 'Cancel anytime'],
    cta: 'Get found on Google', href: '/contact/?fix=google',
  },
  {
    name: 'Missed-call text-back', price: '$250 + $79/mo', per: 'setup, then monthly',
    what: 'Every call you miss gets a text back in seconds, in your name.',
    includes: ['You keep your phone number', 'Texts written in your words', 'Live in 3–5 days', 'Cancel anytime'],
    cta: 'Stop missing calls', href: '/contact/?fix=calls',
  },
  {
    name: 'Front Desk package', price: '$1,000 + $249/mo', per: 'setup, then monthly', flag: 'All in one',
    what: 'Text-back, booking, reminders and reviews, tied together by one customer list.',
    includes: ['Missed-call text-back', 'Customer list with every call and text', 'Online booking and reminder texts', 'Review requests after every job'],
    cta: 'Ask about Front Desk', href: '/contact/?fix=calls',
  },
];

export interface Item { name: string; what: string; price: string; flag?: string }
export interface Group { bucket: string; title: string; note: string; cta: string; href: string; items: Item[] }

export const groups: Group[] = [
  {
    bucket: 'websites', title: 'Websites', note: 'One-time builds. Monthly plans are optional.',
    cta: 'Get a website quote', href: '/contact/?fix=site',
    items: [
      { name: 'Starter website', what: 'Up to 3 pages built for phones · Contact form and tap-to-call · Set up to show on Google · Domain, hosting and security set up. Live in 2–3 weeks.', price: '$1,200' },
      { name: 'Pro website', flag: 'Most pick this', what: 'Up to 8 custom pages · Instant quote calculator · Google Business Profile setup · Premium design and animation · A page for each town you serve.', price: '$2,500' },
      { name: 'Care plan', what: 'Hosting, security and backups · Small edits each month · Google Business posts · Monthly check-up report. Cancel anytime.', price: '$149/mo' },
      { name: 'Growth plan', what: 'Everything in Care · A new service or town page monthly · Automatic review requests · Monthly ranking and calls report · Quarterly strategy call.', price: '$299/mo' },
      { name: 'Quote calculator for a site you already have', what: 'A simple price calculator added to your current website. Already included in a Pro website.', price: 'from $199' },
    ],
  },
  {
    bucket: 'google', title: 'Get found on Google', note: 'No one can promise #1. We show you what moved every month.',
    cta: 'Get found on Google', href: '/contact/?fix=google',
    items: [
      { name: 'Google Business Profile setup', what: 'Categories, services, hours, service area, photos and the link to your site. First fixes in a week.', price: '$300' },
      { name: 'Google Business management', what: 'Posts, photos, review replies and profile updates every month.', price: '$149/mo' },
      { name: 'Review requests', what: 'After every job the customer gets a short text with a one-tap link to review you on Google. Included in Front Desk and the Growth plan. Live in 2 days.', price: '$250 + $79/mo' },
    ],
  },
  {
    bucket: 'calls', title: 'Never miss a call', note: 'You keep your phone number. Turn any of it off any time.',
    cta: 'Stop missing calls', href: '/contact/?fix=calls',
    items: [
      { name: 'Front Desk package', flag: 'All in one', what: 'Missed-call text-back · Online booking and reminder texts · Review requests after every job · Plus the customer list that keeps every call, text and booking in one place, which is not sold on its own. Add the AI receptionist and we waive its $750 setup.', price: '$1,000 + $249/mo' },
      { name: 'Missed-call text-back', what: 'Every missed call gets a text back in seconds, signed with your business name. Live in 3–5 days.', price: '$250 + $79/mo' },
      { name: 'AI receptionist', what: 'Picks up the calls you miss, asks what they need, books them on your calendar and texts you a summary. Live in 1–2 weeks.', price: '$750 + $199/mo' },
      { name: 'Online booking + reminder texts', what: 'Every booking gets a confirmation text, a reminder the day before and a one-tap reschedule link. Included in Front Desk. Live in 2–3 days.', price: '$300 + $29/mo' },
      { name: 'Quote calculator + automatic follow-up', what: 'A price calculator on your site, and follow-ups that go out on their own until the customer says yes or no. Live in 1–2 weeks.', price: '$500 + $149/mo' },
      { name: 'Chat assistant on your website', what: 'Answers questions 24/7 from what you teach it and hands hot leads to you. $500 with a Pro website.', price: '$750' },
      { name: 'Chat assistant upkeep', what: 'Added to a Care or Growth plan. Keeps your assistant trained on new services, prices and questions.', price: '+$99/mo' },
    ],
  },
  {
    bucket: 'run', title: 'Run the business', note: 'One-time setup jobs unless a monthly price is shown.',
    cta: 'Ask about a setup job', href: '/contact/?service=it-support',
    items: [
      { name: 'Business email', what: 'you@yourbusiness.com on Google Workspace, set up so it lands in inboxes, not spam. Google bills about $7 per person a month.', price: '$150' },
      { name: 'Online payments + text-to-pay', what: 'Stripe or Square, so customers pay from a link on their phone.', price: '$250' },
      { name: 'Invoicing setup', what: 'QuickBooks or Stripe invoices with your logo, terms and reminders.', price: '$300' },
      { name: 'Digital forms + e-signatures', what: 'Intake forms, estimates and contracts signed on a phone.', price: '$300' },
      { name: 'Jobber or Housecall Pro setup', what: 'Already use one? We set it up properly and load your customers.', price: '$500' },
      { name: 'Tech cleanup', what: 'Domain, logins and accounts sorted out so you know who owns what.', price: '$150' },
      { name: 'Email newsletter', what: 'Set up, then a monthly email to past customers.', price: '$400 + $99/mo' },
      { name: 'Spreadsheet system', what: 'A tracker for jobs, quotes, expenses or mileage that does the math for you.', price: 'from $99' },
      { name: 'Automation', what: 'Two tools you already use, connected so you stop typing things twice.', price: 'from $149' },
      { name: 'IT support', what: 'The one thing billed by the hour. We tell you before the clock starts.', price: '$60/hr' },
    ],
  },
  {
    bucket: 'custom', title: 'Custom builds', note: 'Built for one business. Fixed quote in writing after a call.',
    cta: 'Describe what you need', href: '/contact/?service=systems',
    items: [
      { name: 'Owner dashboard', what: 'Calls, leads, bookings and money on one screen.', price: 'from $2,500' },
      { name: 'Custom quote or invoice tool', what: 'Built around how you price and bill.', price: 'from $1,500' },
      { name: 'Stores, portals and bigger systems', what: 'Online stores, customer portals, booking and payment systems.', price: 'Quoted' },
    ],
  },
];

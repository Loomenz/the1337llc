// The one list of what we do. The menu, the services page, the price sheet,
// the footer and the contact form all read from here, so an owner sees the
// same five things everywhere. Add or rename a bucket here only.
export interface Bucket {
  id: string;
  name: string;
  pain: string; // the problem in the owner's words
  blurb: string;
  href?: string; // where the bucket's main page lives
  pages?: string[]; // service slugs listed under the bucket (when it has more than one page)
}

export const BUCKETS: Bucket[] = [
  { id: 'websites', name: 'Websites', pain: 'My website looks like 2012', blurb: 'A fast site built for phones that turns visitors into calls and bookings.', href: '/services/websites/' },
  { id: 'google', name: 'Get found on Google', pain: 'Nobody finds me on Google', blurb: 'Your Google profile, reviews and town pages, kept up every month.', href: '/services/local-seo/' },
  { id: 'calls', name: 'Never miss a call', pain: 'I miss calls and nobody follows up', blurb: 'Text-back, a receptionist that answers for you, booking, reminders and follow-up.', href: '/services/never-miss-a-call/' },
  { id: 'run', name: 'Run the business', pain: 'The back office is eating my nights', blurb: 'Email, payments, invoicing, tracking and a plan to grow.', pages: ['business-development', 'business-systems', 'it-support'] },
  { id: 'custom', name: 'Custom builds', pain: 'I need something nobody sells', blurb: 'Dashboards, stores, booking and payment tools built around how you work.', href: '/systems/' },
];

// Which bucket each service page and each home-page fix belongs to.
// Used to pre-pick the right option on the contact form.
export const BUCKET_OF: Record<string, string> = {
  // service slugs
  websites: 'websites', 'local-seo': 'google', 'never-miss-a-call': 'calls',
  'business-development': 'run', 'business-systems': 'run', 'it-support': 'run', systems: 'custom',
  // fix ids from data/fixes.ts
  site: 'websites', google: 'google', reviews: 'google', calls: 'calls', quotes: 'calls', noshow: 'calls',
};

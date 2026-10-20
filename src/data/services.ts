// Service pages at /services/<slug>/. Each one targets its own Google search.
export interface Service {
  slug: string;
  name: string;
  title: string; // <title> tag
  description: string; // meta description
  headline: string;
  intro: string;
  includes: string[];
  forWho: string;
  faq: [string, string][];
}

export const services: Service[] = [
  {
    slug: 'websites',
    name: 'Websites',
    title: 'Contractor & Small Business Websites in Northwest Indiana | 1337 LLC',
    description: 'Fast, mobile-first websites for Northwest Indiana and Chicagoland contractors and local businesses. Click-to-call, quote forms and local SEO built in.',
    headline: 'Websites that bring in calls',
    intro: 'Most customers find you on their phone, compare you to two other companies and call whoever looks most trustworthy. We build sites that win that comparison: fast, clear about what you do and where you work, and one tap away from a phone call or quote request.',
    includes: [
      'Mobile-first design that loads fast',
      'Tap-to-call and quote request forms on every page',
      'A page for each service you offer',
      'Photos of your real work, reviews and service area',
      'Local SEO groundwork: titles, schema, Google Business link',
      'Hosting, SSL and domain setup. You own everything.',
    ],
    forWho: 'Contractors, trades and local service businesses that get most of their work from people searching Google or checking them out after a referral.',
    faq: [
      ['How long does a website take?', 'Most sites are live within two weeks of the deposit, depending on how fast we get your photos and details.'],
      ['Do I own the site?', 'Yes. The domain, the content and the code are yours.'],
      ['What if I already have a site?', 'We can redesign it or fix what is holding it back. Start with the free Google check to see what matters most.'],
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Google Business',
    title: 'Local SEO & Google Business Profile for NWI Businesses | 1337 LLC',
    description: 'Show up in the Google map pack when Northwest Indiana customers search for your service. Google Business Profile setup, reviews and local SEO.',
    headline: 'Show up when locals search',
    intro: 'When someone searches "your service near me", Google shows three businesses on the map before anything else. Those three get most of the calls. We set up and keep up your Google Business Profile, reviews and website so you have a real shot at those spots.',
    includes: [
      'Google Business Profile setup or cleanup',
      'Correct categories, services, hours and service area',
      'Regular photo and update posts',
      'A simple review-request system for every finished job',
      'Service and town pages on your website',
      'Listings on Bing, Apple Maps, Yelp and local directories',
    ],
    forWho: 'Any local business that wants more calls from Google without paying for ads.',
    faq: [
      ['How fast will I rank?', 'Nobody can honestly promise a ranking. Profile fixes and reviews usually show movement within a few months; competitive trades take longer.'],
      ['Do I need a website for this?', 'It helps a lot. Google trusts businesses with a real website that matches their profile.'],
    ],
  },
  {
    slug: 'ai-lead-tools',
    name: 'AI Lead Tools',
    title: 'AI Lead Follow-Up & Automation for Contractors | 1337 LLC',
    description: 'Stop losing leads. Missed-call text-back, instant quote follow-up, review requests and after-hours intake for Northwest Indiana contractors.',
    headline: 'Stop losing leads you already paid for',
    intro: 'Calls come in while you are on a job. Quote requests sit in your inbox overnight. Customers who would happily leave a review never get asked. We set up simple AI-powered tools that answer, follow up and ask for you, so leads do not slip through.',
    includes: [
      'Missed-call text-back: callers get a text right away',
      'Automatic follow-up on quote requests',
      'Review requests after every finished job',
      'After-hours intake that collects job details and photos',
      'Leads sent straight to your phone or a simple tracker',
    ],
    forWho: 'Owners who are on the job all day and know they lose calls and quotes because nobody gets back to people fast enough.',
    faq: [
      ['Will it sound like a robot?', 'No. Messages are written in your voice and you approve them before anything goes live.'],
      ['Do I need new software?', 'Usually not. We work with your phone, email and website and keep it as simple as possible.'],
    ],
  },
  {
    slug: 'business-systems',
    name: 'Business Systems',
    title: 'Job, Invoice & Profit Tracking Systems for Small Businesses | 1337 LLC',
    description: 'Simple spreadsheets and dashboards for jobs, quotes, invoices, expenses, mileage and profit, built for Northwest Indiana small businesses.',
    headline: 'Know your numbers without the headache',
    intro: 'Most small businesses run on memory, sticky notes and a pile of receipts. We build simple systems that track jobs, quotes, invoices, expenses and profit, and do the math for you.',
    includes: [
      'Job and quote tracker',
      'Invoices and payments from your phone',
      'Expense and mileage logs',
      'A one-page profit dashboard',
      'Training so you actually use it',
    ],
    forWho: 'Owners who want to know which jobs make money and stop doing paperwork at midnight.',
    faq: [
      ['Is this accounting software?', 'No. It works alongside your accountant and makes their job (and bill) smaller.'],
    ],
  },
  {
    slug: 'it-support',
    name: 'IT Setup & Support',
    title: 'Small Business IT Setup & Support in Northwest Indiana | 1337 LLC',
    description: 'Business email, domains, Wi-Fi, backups, new devices and security basics for Northwest Indiana small businesses. Local help you can call.',
    headline: 'Tech set up right the first time',
    intro: 'Business email on your own domain, devices that are backed up, Wi-Fi that works and passwords that are not on a sticky note. We set it up properly and you have someone local to call when something breaks.',
    includes: [
      'Business email on your own domain',
      'Domain and DNS management',
      'Backups and basic security',
      'New computer and phone setup',
      'Help when something stops working',
    ],
    forWho: 'Small offices and crews without an IT person.',
    faq: [
      ['Do you come on site?', 'Yes, across Northwest Indiana. Many fixes can also be done remotely.'],
    ],
  },
];

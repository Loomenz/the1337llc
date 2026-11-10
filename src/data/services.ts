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
  price: string; // one plain line shown on the page; full detail is on /pricing/
  faq: [string, string][];
}

export const services: Service[] = [
  {
    slug: 'websites',
    name: 'Websites',
    title: 'Small Business Websites in Northwest Indiana & Chicagoland | 1337',
    description: 'Fast, mobile-first websites for Northwest Indiana and Chicagoland small businesses. Click-to-call, quote forms and local SEO built in.',
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
    forWho: 'Any local business that gets customers from Google or from people checking you out after a referral: trades, salons, shops, offices, restaurants.',
    price: 'Starter $1,200. Pro $2,500. One time, and you own it.',
    faq: [
      ['How long does a website take?', 'Most sites are live in 2 to 3 weeks from the deposit, depending on how fast we get your photos and details.'],
      ['Do I own the site?', 'Yes. The domain, the content and the code are yours.'],
      ['What if I already have a site?', 'We can redesign it or fix what is holding it back. Start with the free Google check to see what matters most.'],
    ],
  },
  {
    slug: 'local-seo',
    name: 'Get found on Google',
    title: 'Local SEO & Google Business Profile for NWI Businesses | 1337',
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
    price: '$300 to set up your Google profile, then $149/mo to keep it managed.',
    faq: [
      ['How fast will I rank?', 'Nobody can honestly promise a ranking. Profile fixes and reviews usually show movement within a few months; competitive trades take longer.'],
      ['Do I need a website for this?', 'It helps a lot. Google trusts businesses with a real website that matches their profile.'],
    ],
  },
  {
    slug: 'never-miss-a-call',
    name: 'Never miss a call',
    title: 'Missed-Call Text-Back, AI Receptionist & Booking for Small Businesses | 1337',
    description: 'Stop losing customers to missed calls. Text-back, an AI receptionist, online booking, reminders, quote follow-up and review requests for Northwest Indiana and Chicagoland small businesses.',
    headline: 'Stop losing customers you already earned',
    intro: 'Calls come in while you are with a customer. Quote requests sit in your inbox overnight. People who would happily leave a review never get asked. We set up simple tools that answer, follow up and ask for you, so nobody slips through. Some of them run on AI. You never have to touch that part.',
    includes: [
      'Missed-call text-back: callers get a text right away',
      'An AI receptionist that answers the calls you miss, books the appointment and texts you a summary',
      'One customer list with every call, text and quote in one place',
      'Online booking with confirmation and reminder texts',
      'Automatic follow-up on quote requests',
      'Review requests after every finished job',
      'A chat assistant on your website that answers questions and takes leads at 2am',
      'The Front Desk package: text-back, customer list, booking and reviews together',
    ],
    forWho: 'Owners who are busy with customers all day and know they lose calls and quotes because nobody gets back to people fast enough.',
    price: 'Text-back $250 + $79/mo. Front Desk package $1,000 + $249/mo.',
    faq: [
      ['Will it sound like a robot?', 'No. Messages are written in your voice and you approve them before anything goes live.'],
      ['Do I have to change my phone number?', 'No. You keep your number and your phone company. Calls you miss forward to our system, which texts the caller back or answers for you.'],
      ['Do I need new software?', 'Usually not. We work with your phone, email and website and keep it as simple as possible.'],
      ['Will the chat assistant make things up?', 'We limit it to your business info and set clear rules. When it does not know, it takes the customer\'s details and passes them to you.'],
      ['Do I need to be good with tech?', 'No. We set it up and keep it running. You just get the customers.'],
    ],
  },
  {
    slug: 'business-development',
    name: 'Small Business Development',
    title: 'Small Business Development & Growth Planning in Northwest Indiana | 1337',
    description: 'Hands-on small business development for Northwest Indiana and Chicagoland owners: growth plans, offers and pricing, lead tracking, marketing and the systems to run it.',
    headline: 'A plan to grow, and the tools to do it',
    intro: 'A website is one piece. Growth comes from knowing who your best customers are, what to charge, where your leads come from and following up on every one. We work with you like an in-house growth partner: build the plan, set up the website, marketing and systems behind it, and check the numbers with you every month.',
    includes: [
      'A written plan: target customers, services and goals',
      'Offer and pricing review',
      'Lead tracking from first call to paid job',
      'Marketing plan: Google, reviews, social and email',
      'Simple monthly dashboard of calls, leads and revenue',
      'Monthly check-ins to adjust what is not working',
    ],
    forWho: 'New and growing small business owners who are great at the work and want help with the business side: getting customers, pricing and staying organized.',
    price: 'Fixed quote in writing after a short call. No hourly billing.',
    faq: [
      ['Is this consulting or do you do the work?', 'Both. We help make the plan and then build the website, tools and marketing to carry it out.'],
      ['I just started my business. Is it too early?', 'No. It is the best time to set up the basics right so you are not fixing them later.'],
    ],
  },
  {
    slug: 'business-systems',
    name: 'Business Systems',
    title: 'Job, Invoice & Profit Tracking Systems for Small Businesses | 1337',
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
    price: 'Spreadsheet systems from $99. Owner dashboards from $2,500.',
    faq: [
      ['Is this accounting software?', 'No. It works alongside your accountant and makes their job (and bill) smaller.'],
    ],
  },
  {
    slug: 'it-support',
    name: 'IT Setup & Support',
    title: 'Small Business IT Setup & Support in Northwest Indiana | 1337',
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
    price: '$60 an hour. Setup jobs like business email from $150.',
    faq: [
      ['Do you come on site?', 'Yes, across Northwest Indiana. Many fixes can also be done remotely.'],
    ],
  },
];

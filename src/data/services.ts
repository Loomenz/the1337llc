// Service pages at /services/<slug>/. Each one targets its own Google search.
// Plain-English, owner-first copy: Credit Cards, Customer Financing & everyday tools first, zero exact-second claims.
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
    name: 'Websites That Bring In Calls',
    title: 'Contractor & Small Business Websites in Northwest Indiana | 1337',
    description: 'Fast, mobile-friendly websites for Northwest Indiana and Chicagoland contractors and local businesses. Click-to-call, ballpark quote forms and local SEO built in.',
    headline: 'Websites that make customers call you first',
    intro: 'Most customers find you on their phone, compare you to two other local companies and call whoever looks most trustworthy. We build fast, clean websites that show your real work, make it one tap to call or request a quote, and stop you from having to buy shared leads from Angi.',
    includes: [
      'Mobile-friendly design that loads fast on any phone',
      'Tap-to-call buttons and simple quote forms on every page',
      'A dedicated page for each service and town you cover',
      'Photos of your real work, customer reviews and service area map',
      'Google setup: titles, map connection and local search basics',
      'Hosting, security and domain setup—you own 100% of your site',
    ],
    forWho: 'Contractors, trades and local businesses that want exclusive phone calls from Google instead of paying lead-generation companies.',
    faq: [
      ['How long does a website take?', 'Most sites are live within two weeks of the deposit, depending on how fast we get your photos and details.'],
      ['Do you offer payment plans or financing?', 'Yes. Projects start with a 50% deposit (with the remaining 50% due at launch), or you can finance the build monthly at checkout through third-party lenders like Klarna or Affirm.'],
      ['Do I own the site?', 'Yes. Once your project is paid in full, the domain, photos and code are 100% yours—no hostage lock-in ever.'],
      ['What if I already have an old site?', 'We can replace it or fix what is holding it back. Start with our free Google check to see what matters most.'],
    ],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO & Multi-Town Expansion',
    title: 'Local SEO, Google Map Pack & Multi-Town Business Expansion | 1337',
    description: 'Show up in the Google Map Pack and take over neighboring towns across Northwest Indiana and Chicagoland. Google Business Profile overhaul, town expansion pages and automatic 5-star review texts.',
    headline: 'Own the Top 3 on Google Maps—and expand into neighboring towns',
    intro: 'When someone searches "roofer near me" or "landscaper near me", Google shows three local businesses on the map before anything else—and those three get 75% of all phone calls. Even worse, most contractors only show up in the town on their mailing address while missing the wealthier suburbs 10 minutes away. We overhaul your Google Business listing, build dedicated Service + Town expansion pages for every city you want to take over, and set up automatic review texts after every finished job.',
    includes: [
      'Complete Google Business Profile overhaul engineered for the Top 3 Map Pack',
      'Multi-Town SEO Expansion: dedicated pages for every neighboring town & suburb you want to work in',
      'Correct categories, services, hours, service-area radius and geo-tagged job photos',
      'Automatic 1-tap text sent after every finished job asking for a 5-star Google review',
      'Weekly Google Business Profile posts so Google sees active local authority',
      'Matching citations across Apple Maps, Bing, Yelp and local trade directories',
    ],
    forWho: 'Contractors and local business owners ready to stop buying shared Angi leads and start dominating their home town plus 5–10 surrounding towns.',
    faq: [
      ['How do you get my business showing up in neighboring towns?', 'Google needs local proof for each city you serve. We build dedicated, fast-loading Town + Service pages on your website (e.g., St. John, Crown Point, Valparaiso, Schererville) backed by town-specific job photos and customer reviews so you rank outside just your mailing zip code.'],
      ['How fast will I move up on Google?', 'Nobody can honestly promise an overnight #1 spot. Profile overhauls, town pages and steady 5-star customer reviews usually show clear call and ranking growth within 60 to 90 days.'],
    ],
  },
  {
    slug: 'ai-lead-tools',
    name: 'Instant Missed-Call Text-Back & Lead Saver',
    title: 'Missed-Call Text-Back & Lead Follow-Up for Contractors | 1337',
    description: 'Stop losing jobs when you are working. Instant missed-call text-back, automatic quote follow-up, review texts and after-hours intake for Northwest Indiana businesses.',
    headline: 'Stop losing jobs when you are too busy to answer the phone',
    intro: 'Calls come in while you are on a mower, on a ladder, under a sink or talking to a customer. When callers hit voicemail, they hang up and call the next business on Google. We set up a simple system that automatically texts missed callers right away, asks how you can help, collects job photos, and sends the whole conversation straight to your phone.',
    includes: [
      'Instant missed-call text-back so callers never jump to your competitor',
      'Automatic friendly follow-up texts on open quotes and estimates',
      'Automatic 5-star review request texted after every finished job',
      'After-hours intake that collects the customer\'s address, job details and photos',
      'Works right on your existing cell phone—no complicated new apps to learn',
    ],
    forWho: 'Owners who are out doing the work all day and know they lose thousands of dollars a month because nobody can answer the phone fast enough.',
    faq: [
      ['Will the text sound like a robot?', 'No. Every message is written in plain English in your exact voice, and you approve every word before we turn it on.'],
      ['Do I have to learn new software?', 'No. Everything comes straight to your regular phone and text messages.'],
    ],
  },
  {
    slug: 'ai-integrations',
    name: 'Automatic Quote Chasers & Paperwork Eliminator',
    title: 'Quote Follow-Up, Past-Customer Text Blasts & 24/7 Website Receptionist | 1337',
    description: 'Stop doing paperwork at 10 PM. 24/7 website receptionist, automatic quote follow-ups, voice-to-quote tools and past-customer text blasts for local small businesses.',
    headline: 'Stop typing quotes and chasing customers at 10 PM',
    intro: 'You did not start your business to sit at the kitchen table every night typing estimates and wondering why people haven\'t replied. We set up practical tools that answer common customer questions on your website 24/7, turn a quick voice note from your truck into a clean estimate, follow up on open quotes automatically, and wake up past customers when your schedule is slow.',
    includes: [
      '24/7 website receptionist trained on your exact services, prices and towns',
      'Automatic follow-up texts on open estimates until they book',
      'Voice-to-Quote: speak into your phone in the truck to draft a clean quote right away',
      'Seasonal text/email blasts to your past customer list to fill slow weeks fast',
      'Connects with QuickBooks, Google Calendar or your spreadsheets so you never type things twice',
      'Plain-English setup—we build it and maintain it for you',
    ],
    forWho: 'Busy owners who want to close more estimates and get their evenings back without hiring an office manager.',
    faq: [
      ['Will the website receptionist ever make up prices?', 'Never. It only uses the exact prices and rules you give us. Whenever someone asks for something custom, it grabs their phone number and texts it straight to you.'],
      ['What does it cost?', 'Setup is a flat written quote up front, and we show you any monthly cost in writing before we start.'],
      ['Do I need to be good with computers?', 'Not at all. We set the whole thing up and keep it running for you.'],
    ],
  },
  {
    slug: 'business-systems',
    name: 'Credit Cards, Customer Financing & Job Trackers',
    title: 'Credit Card Processing, Customer Financing, Driveway Invoicing & Job Trackers | 1337',
    description: 'Take credit cards, Apple Pay, customer financing and text invoices in the driveway, add an online price calculator, and track every job and dollar on one simple screen.',
    headline: 'Take credit cards on the spot and offer financing on big jobs',
    intro: 'Still writing paper bills, waiting weeks for checks in the mail, or losing big jobs because homeowners don\'t have the full cash upfront? We set you up to send a text invoice from your phone right away so customers can pay by Credit Card, Debit Card, Apple Pay, Google Pay, bank transfer, or "Pay Over Time" monthly financing—while you get paid upfront.',
    includes: [
      'Credit card, debit card, Apple Pay, Google Pay & ACH bank transfer setup',
      'Customer Financing ("Pay Over Time") on your quotes so you close bigger jobs and get paid upfront',
      'Text-to-Pay phone invoicing so you get paid before leaving the driveway',
      'Optional Cash App, Strike & Bitcoin Lightning setup to skip 3% card swipe fees',
      'Online "Ballpark Price" calculator on your website to filter out tire-kickers',
      'Simple one-page Job, Quote, Expense & Profit tracker built for your phone',
    ],
    forWho: 'Owners who want to stop chasing checks, help customers finance larger jobs, and know their real profit without messy spreadsheets.',
    faq: [
      ['How does customer financing work for my clients?', 'When you send a quote or invoice, your customer can choose to pay over time in monthly installments (through providers like Klarna, Affirm or Wisetack). You get paid upfront, and the financing company handles collecting their monthly payments.'],
      ['Can I just use normal credit cards and Apple Pay?', 'Yes! Most of our clients take everyday credit cards, debit cards, Apple Pay and ACH transfers. We only add Cash App or Lightning if you want extra instant/low-fee options.'],
    ],
  },
  {
    slug: 'business-development',
    name: 'Business Expansion & Territory Growth',
    title: 'Small Business Expansion, Territory Growth & Pricing Strategy | 1337',
    description: 'Expand your service business into high-paying neighboring towns, add customer financing to close bigger tickets, and track every call and dollar in Northwest Indiana and Chicagoland.',
    headline: 'Go from one town to dominating your entire region',
    intro: 'Being great at your trade gets you started—expanding into wealthier neighboring towns, offering customer financing on high-ticket jobs, and charging the right margin is how you scale. We act as your hands-on growth partner: we map out the highest-paying surrounding towns, build the SEO pages and review systems to capture them, set up "Pay Over Time" customer financing so you close bigger jobs, and track every call to paid invoice.',
    includes: [
      'Multi-Town Expansion Roadmap: target and rank in the highest-paying surrounding suburbs',
      'High-Ticket Offer & Customer Financing setup so homeowners say yes to larger jobs',
      'Pricing & margin review so you stop undercharging on labor and materials',
      'Simple tracking from first Google phone call to paid driveway invoice',
      'One-page monthly scoreboard showing calls by town, booked jobs and net profit',
    ],
    forWho: 'Established contractors and local owners who want to expand into new towns, add another crew, or move up to higher-ticket jobs.',
    faq: [
      ['Is this just advice or do you actually build the expansion engine?', 'We build and run the whole thing. We identify the best neighboring towns and highest-margin services, then we build the town SEO pages, Google Map Pack system, customer financing checkout and follow-ups to make it happen.'],
    ],
  },
  {
    slug: 'it-support',
    name: 'Local IT Setup, Business Email & Tech Help',
    title: 'Small Business IT Setup & Support in Northwest Indiana | 1337',
    description: 'Professional business email, domains, shop Wi-Fi, backups, new computers and tech help for Northwest Indiana small businesses. Someone local you can call.',
    headline: 'Your business email, Wi-Fi and computers set up right',
    intro: 'Still using a @yahoo.com or @gmail.com address on your truck? Shop Wi-Fi dropping out? Worried about losing all your files if a laptop dies? We set up professional email on your own domain, lock down your backups, fix your shop/office Wi-Fi, and give you a local person to call whenever something breaks.',
    includes: [
      'Professional email on your own domain (like mike@mikesheating.com)',
      'Business phone number & call-forwarding setup',
      'Shop & office Wi-Fi, printer, tablet and computer setup',
      'Automatic daily backups so you never lose estimates or customer files',
      'On-site help across Northwest Indiana + fast remote fixes',
    ],
    forWho: 'Small offices, shops and crews without an in-house computer person.',
    faq: [
      ['Do you come out in person?', 'Yes, anywhere across Northwest Indiana and Chicagoland, and we can fix most everyday issues remotely right away.'],
    ],
  },
];

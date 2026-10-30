// Trade pages at /websites-for/<slug>/. Each one pairs a trade with a matching portfolio site.
export interface Trade {
  slug: string;
  trade: string; // plural, used in headings: "Excavating Companies"
  title: string;
  description: string;
  intro: string;
  needs: string[];
  example: { name: string; url: string; image: string; note: string };
}

export const trades: Trade[] = [
  {
    slug: 'excavating-companies',
    trade: 'Excavating Companies',
    title: 'Websites for Excavating Companies in Northwest Indiana | 1337',
    description: 'Websites and local SEO for excavating, land clearing and site prep companies in Northwest Indiana and Chicagoland.',
    intro: 'Excavating jobs are big tickets, and customers want proof before they call. Your site should show finished work, the equipment you run, the towns you cover and make it easy to request a quote.',
    needs: [
      'Before and after photos of real jobs',
      'Separate pages for land clearing, site prep, grading, drainage and demolition',
      'Service-area pages for the towns you work in',
      'A quote form that asks for acreage, location and photos',
      'Tap-to-call for people standing on their lot',
    ],
    example: { name: 'SPK Excavating', url: 'https://spkexcavating.com', image: '/work/spk-excavating.jpg', note: 'Land clearing and site prep in Northwest Indiana, with before and after galleries.' },
  },
  {
    slug: 'landscapers',
    trade: 'Landscapers & Lawn Care',
    title: 'Websites for Landscapers & Lawn Care in Northwest Indiana | 1337',
    description: 'Websites with instant lawn care quotes, snow removal pages and local SEO for Northwest Indiana landscapers.',
    intro: 'Lawn care customers compare three companies in five minutes. The one that shows a price first usually gets the call. We build sites with instant quote calculators so customers see a number and book.',
    needs: [
      'An instant quote calculator by lawn size',
      'Seasonal pages for mowing, cleanups and snow removal',
      'On-site invoicing and payments from your phone',
      'Google reviews front and center',
    ],
    example: { name: 'SPK Lawn & Snow', url: 'https://spklawnandsnow.com', image: '/work/spk-lawn.jpg', note: 'Commercial and residential maintenance with a dual quote engine for lawn and snow.' },
  },
  {
    slug: 'home-builders',
    trade: 'Home Builders',
    title: 'Websites for Home Builders in Northwest Indiana | 1337',
    description: 'Websites for Northwest Indiana home builders with floor plans, galleries and lead capture for new construction and custom homes.',
    intro: 'Buying a new home is the biggest purchase most people make. A builder site has to look as solid as the homes, show floor plans and finished builds, and capture leads from serious buyers.',
    needs: [
      'Floor plan pages with photos and specs',
      'Galleries of finished homes',
      'Available lots and communities',
      'Lead forms that ask about budget and timeline',
    ],
    example: { name: 'SPK Homes', url: 'https://spkhomes.com', image: '/work/spk-homes.jpg', note: 'Affordable new construction and custom homes with floor plans.' },
  },
  {
    slug: 'truck-and-fleet-repair',
    trade: 'Truck & Fleet Repair',
    title: 'Websites for Truck & Fleet Repair Shops in Northwest Indiana | 1337',
    description: 'Lead-generating websites for mobile truck repair and fleet service companies in Northwest Indiana and Chicagoland.',
    intro: 'When a truck is down, the fleet manager calls whoever shows up first on Google with a clear phone number. Your site needs emergency calls front and center and pages for every service you do.',
    needs: [
      'Emergency call button on every page',
      'Service pages for mobile repair, PM and DOT inspections',
      'Coverage area map for your mobile service',
      'Fleet account sign-up form',
    ],
    example: { name: 'Big Iron Fleet Services', url: 'https://bigironfleet.com', image: '/work/big-iron-fleet.jpg', note: 'Concept build for mobile heavy-duty truck and fleet repair.' },
  },
];

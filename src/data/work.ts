// Portfolio cards on the home page, in display order.
// Each project includes a custom dark-luxury UI schematic identifier (`schematic`)
// so the homepage never clashes with raw contractor website photos.
export interface Project {
  id: 'spk-lawn' | 'tony-cutz' | 'spk-homes' | 'glass-godz' | 'big-iron' | 'spk-excavating';
  name: string;
  url: string;
  blurb: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: { label: string; hot?: boolean }[];
  size: 'wide' | 'narrow' | 'full';
  kind: 'scroll' | 'hero';
  image?: string;
  alt?: string;
  headline?: string;
  caption?: string;
}

export const projects: Project[] = [
  {
    id: 'spk-lawn',
    name: 'SPK Lawn & Snow',
    url: 'spklawnandsnow.com',
    blurb: 'Dual Lawn & Snow Instant Quote Engine',
    problem: 'Owner was spending hours driving out to measure lots just to give ballpark lawn and snow quotes.',
    solution: 'Built a custom Dual Lawn & Snow Instant Quote Engine with property lot sizing and commercial plow tiers.',
    outcome: 'Customers price their own property right away and book online 24/7.',
    tags: [{ label: 'Dual quote engine', hot: true }, { label: 'Automated intake' }],
    size: 'wide',
    kind: 'scroll',
    image: '/work/spk-lawn.jpg',
    alt: 'SPK Lawn & Snow website',
  },
  {
    id: 'tony-cutz',
    name: 'Tony Cutz Grass',
    url: 'tonycutzgrass.com',
    blurb: 'Driveway Field POS & Instant Invoicing',
    problem: 'Paper invoices and slow payments were tying up cashflow after finishing landscaping jobs.',
    solution: 'Engineered a mobile-first Field POS & Instant Quote system so crews invoice and collect payment from the truck.',
    outcome: 'Paid before leaving the driveway with zero late-night billing.',
    tags: [{ label: 'Field POS', hot: true }, { label: 'Instant settlement' }],
    size: 'narrow',
    kind: 'scroll',
    image: '/work/tony-cutz.jpg',
    alt: 'Tony Cutz Grass website',
  },
  {
    id: 'spk-homes',
    name: 'SPK Homes',
    url: 'spkhomes.com',
    blurb: 'Interactive Floor-Plan & Build Configurator',
    problem: 'Buyers needed to compare floor plans, specs, and build pricing before scheduling a builder walkthrough.',
    solution: 'Built an interactive floor-plan showcase and buyer qualification portal on Next.js.',
    outcome: 'Pre-qualified home buyers book consultations with their exact floor plan already chosen.',
    tags: [{ label: 'Next.js' }, { label: 'Floor plan engine', hot: true }],
    size: 'narrow',
    kind: 'hero',
    image: '/work/spk-homes.jpg',
    headline: 'SPK Homes',
    caption: 'Affordable new construction & custom-built homes',
  },
  {
    id: 'glass-godz',
    name: 'Glass Godz',
    url: 'glassgodz.com',
    blurb: 'Mobile Photo-Quote & Repair Dispatch',
    problem: 'Emergency broken-glass and window repair callers needed a fast way to send measurements and photos.',
    solution: 'Built a high-speed mobile intake and quote flow tailored for residential and commercial glass repair.',
    outcome: 'Faster turnarounds and higher close rates on inbound repair calls.',
    tags: [{ label: 'Photo quote intake', hot: true }, { label: 'Next.js' }],
    size: 'wide',
    kind: 'hero',
    image: '/work/glass-godz.jpg',
    headline: 'Glass Godz',
    caption: 'Master window, glass & screen repair',
  },
  {
    id: 'big-iron',
    name: 'Big Iron Fleet Services',
    url: 'bigironfleet.com',
    blurb: 'Roadside Emergency Dispatch & Fleet Portal',
    problem: 'Fleet managers with downed rigs on I-80/I-94 need immediate dispatch and clear service capabilities.',
    solution: 'Designed a rapid emergency dispatch & fleet maintenance portal built for mobile roadside response.',
    outcome: 'One-tap roadside dispatch and commercial fleet onboarding.',
    tags: [{ label: 'Emergency dispatch', hot: true }, { label: 'Fleet portal' }],
    size: 'wide',
    kind: 'scroll',
    image: '/work/big-iron-fleet.jpg',
    alt: 'Big Iron Fleet Services website concept',
  },
  {
    id: 'spk-excavating',
    name: 'SPK Excavating',
    url: 'spkexcavating.com',
    blurb: 'Heavy Site-Prep & Land Clearing Funnel',
    problem: 'High-ticket excavation jobs require visual proof of heavy equipment capability and past site prep.',
    solution: 'Engineered an interactive before-and-after site-prep showcase and contractor quote funnel.',
    outcome: 'Turns GC and landowner visits into high-ticket site-work inquiries.',
    tags: [{ label: 'Before / after engine' }, { label: 'Next.js' }],
    size: 'narrow',
    kind: 'hero',
    image: '/work/spk-excavating.jpg',
    headline: 'Land Clearing.<br>Site Prep. Done right.',
    caption: 'Northwest Indiana excavation & site work',
  },
];

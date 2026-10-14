// Portfolio cards on the home page, in display order.
// size: 'wide' (7 of 12 columns), 'narrow' (5) or 'full' (12).
// Screenshots live in public/work/. kind 'scroll' pans a tall screenshot on hover;
// 'hero' shows the image as a background with a headline over it; 'hvac' is the
// gradient card with no screenshot.
export interface Project {
  name: string;
  url: string;
  blurb: string;
  tags: { label: string; hot?: boolean }[];
  size: 'wide' | 'narrow' | 'full';
  kind: 'scroll' | 'hero' | 'hvac';
  image?: string;
  alt?: string;
  headline?: string;
  caption?: string;
}

export const projects: Project[] = [
  {
    name: 'SPK Lawn & Snow', url: 'spklawnandsnow.com', blurb: 'Commercial & residential property maintenance',
    tags: [{ label: 'Dual quote engine', hot: true }, { label: 'Website' }],
    size: 'wide', kind: 'scroll', image: '/work/spk-lawn.jpg', alt: 'SPK Lawn & Snow website',
  },
  {
    name: 'SPK Homes', url: 'spkhomes.com', blurb: 'Home builder, Kingsford Heights IN',
    tags: [{ label: 'Next.js' }, { label: 'Floor plans' }],
    size: 'narrow', kind: 'hero', image: '/work/spk-homes.jpg',
    headline: 'SPK Homes', caption: 'Affordable new construction & custom-built homes',
  },
  {
    name: 'Tony Cutz Grass', url: 'tonycutzgrass.com', blurb: 'Landscaping with on-site invoicing & payments',
    tags: [{ label: 'Field POS', hot: true }, { label: 'Instant quotes' }],
    size: 'narrow', kind: 'scroll', image: '/work/tony-cutz.jpg', alt: 'Tony Cutz Grass website',
  },
  {
    name: 'Big Iron Fleet Services', url: 'bigironfleet.com', blurb: 'Mobile heavy-duty truck & fleet repair',
    tags: [{ label: 'Concept build' }, { label: 'Lead gen' }],
    size: 'wide', kind: 'scroll', image: '/work/big-iron-fleet.jpg', alt: 'Big Iron Fleet Services website concept',
  },
  {
    name: 'SPK Excavating', url: 'spkexcavating.com', blurb: 'Land clearing & site prep',
    tags: [{ label: 'Next.js' }, { label: 'Before / after' }],
    size: 'wide', kind: 'hero', image: '/work/spk-excavating.jpg',
    headline: 'Land Clearing.<br>Site Prep. Done right.', caption: 'Northwest Indiana excavation & site work',
  },
  {
    name: 'Glass Godz', url: 'glassgodz.com', blurb: 'Window & glass specialists',
    tags: [{ label: 'Next.js' }, { label: 'Quote form' }],
    size: 'narrow', kind: 'hero', image: '/work/glass-godz.jpg',
    headline: 'Glass Godz', caption: 'Master window, glass & screen repair',
  },
  {
    name: 'WillSee HVAC', url: 'willseehvac.com', blurb: 'Heating & cooling contractor',
    tags: [{ label: 'Next.js' }, { label: 'Emergency CTA' }, { label: 'Quote form' }],
    size: 'full', kind: 'hvac',
    headline: 'Next-Gen<br><span class="ice">Heating &amp; Cooling</span>', caption: 'Emergency service, quote requests and service-area pages',
  },
];

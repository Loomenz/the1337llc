// One place for the facts every page and the schema reuse.
// phone is E.164 for tel:/sms: links and schema; phoneDisplay is what people read.
export const BUSINESS = {
  name: '1337 LLC',
  short: '1337',
  url: 'https://the1337llc.com',
  email: 'ryan@the1337llc.com',
  phone: '+12193070005' as string | null,
  phoneDisplay: '(219) 307-0005',
  region: 'Northwest Indiana & Chicagoland',
};

// Service area, roughly west to east then north. Used for the town strip, the schema and future city pages.
export const TOWNS = [
  'Hammond', 'Munster', 'Highland', 'Schererville', 'Dyer', 'St. John', 'Crown Point',
  'Cedar Lake', 'Lowell', 'Merrillville', 'Hobart', 'Portage', 'Valparaiso', 'Chesterton',
  'Michigan City', 'Lansing', 'Calumet City', 'Orland Park', 'Tinley Park', 'Chicago',
];

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BUSINESS.name,
    url: BUSINESS.url,
    email: BUSINESS.email,
    ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
    image: `${BUSINESS.url}/og-image.png`,
    description: 'Local studio building websites, local SEO and tools that answer calls, follow up on leads and book customers for small businesses.',
    // Service-area business: no street address, only the region and the towns served.
    address: { '@type': 'PostalAddress', addressRegion: 'IN', addressCountry: 'US' },
    areaServed: TOWNS.map((name) => ({ '@type': 'City', name })),
    knowsAbout: ['Website design', 'Local SEO', 'Google Business Profile', 'Missed-call text-back', 'AI receptionist'],
  };
}

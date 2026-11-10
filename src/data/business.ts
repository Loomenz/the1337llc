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

// Both forms post to Web3Forms, which emails each submission to BUSINESS.email.
// The access key is a public form id (it is meant to sit in page HTML), not a secret.
// To send submissions to a different inbox, create a new key for that address at web3forms.com.
export const FORM = {
  action: 'https://api.web3forms.com/submit',
  accessKey: 'd1094bc0-76f1-4b46-9d2e-e21891510e64',
};

// Service area, roughly west to east then north. Used for the town strip, the schema and future city pages.
export const TOWNS = [
  'Hammond', 'Munster', 'Highland', 'Schererville', 'Dyer', 'St. John', 'Crown Point',
  'Cedar Lake', 'Lowell', 'Merrillville', 'Hobart', 'Portage', 'Valparaiso', 'Chesterton',
  'Michigan City', 'Lansing', 'Calumet City', 'Orland Park', 'Tinley Park', 'Chicago',
];

// Rough map positions [latitude, longitude] for the service-area map. Not an address.
export const TOWN_AT: Record<string, [number, number]> = {
  Hammond: [41.583, -87.500], Munster: [41.564, -87.512], Highland: [41.554, -87.452], Schererville: [41.479, -87.454],
  Dyer: [41.494, -87.522], 'St. John': [41.450, -87.470], 'Crown Point': [41.417, -87.365], 'Cedar Lake': [41.365, -87.441],
  Lowell: [41.291, -87.420], Merrillville: [41.483, -87.333], Hobart: [41.532, -87.255], Portage: [41.576, -87.176],
  Valparaiso: [41.473, -87.061], Chesterton: [41.611, -87.064], 'Michigan City': [41.708, -86.895], Lansing: [41.565, -87.539],
  'Calumet City': [41.615, -87.530], 'Orland Park': [41.630, -87.854], 'Tinley Park': [41.573, -87.784], Chicago: [41.80, -87.66],
};

// Which county each town is in, for the service-area page and the schema.
export const COUNTY_OF: Record<string, string> = {
  Hammond: 'Lake County, IN', Munster: 'Lake County, IN', Highland: 'Lake County, IN', Schererville: 'Lake County, IN',
  Dyer: 'Lake County, IN', 'St. John': 'Lake County, IN', 'Crown Point': 'Lake County, IN', 'Cedar Lake': 'Lake County, IN',
  Lowell: 'Lake County, IN', Merrillville: 'Lake County, IN', Hobart: 'Lake County, IN',
  Portage: 'Porter County, IN', Valparaiso: 'Porter County, IN', Chesterton: 'Porter County, IN',
  'Michigan City': 'LaPorte County, IN',
  Lansing: 'Cook County, IL', 'Calumet City': 'Cook County, IL', 'Orland Park': 'Cook County, IL', 'Tinley Park': 'Cook County, IL', Chicago: 'Cook County, IL',
};

// Public profiles of the business (Google Business Profile share link, Facebook, LinkedIn, Yelp...).
// Add each URL once the listing is live; they go into the schema as sameAs so Google ties them together.
export const PROFILES: string[] = [];

export const BUSINESS_ID = `${BUSINESS.url}/#business`;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    alternateName: '1337',
    url: BUSINESS.url,
    email: BUSINESS.email,
    ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
    image: `${BUSINESS.url}/og-image.png`,
    logo: `${BUSINESS.url}/icon-512.png`,
    priceRange: '$$',
    ...(PROFILES.length ? { sameAs: PROFILES } : {}),
    description: 'Local studio building websites, local SEO and tools that answer calls, follow up on leads and book customers for small businesses.',
    // Service-area business: no street address, only the region and the towns served.
    address: { '@type': 'PostalAddress', addressRegion: 'IN', addressCountry: 'US' },
    areaServed: TOWNS.map((name) => ({ '@type': 'City', name, containedInPlace: { '@type': 'AdministrativeArea', name: COUNTY_OF[name] } })),
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer service', email: BUSINESS.email, ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}), areaServed: 'US', availableLanguage: 'English' },
    knowsAbout: ['Website design', 'Local SEO', 'Google Business Profile', 'Missed-call text-back', 'AI receptionist', 'Small business development'],
  };
}

// City pages at /websites-<town>-<state>/ (e.g. /websites-crown-point-in/).
// Add a town here to publish its page. Keep facts to things we know are true:
// county, state, main roads and the towns next door. No made-up stats or fake local reviews.
// Each town needs its own `local` and `roads` so the pages aren't copies of each other
// (Google ignores near-identical town pages).
export interface City {
  slug: string;
  town: string;
  state: 'IN' | 'IL';
  county: string;
  nearby: string[];
  /** One or two true sentences about the town's business scene, in plain words. */
  local: string;
  /** Main roads or areas where the town's businesses sit. Used in the "where people search" copy. */
  roads: string[];
}

const mk = (town: string, state: 'IN' | 'IL', county: string, nearby: string[], local: string, roads: string[]): City => ({
  slug: `websites-${town.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${state.toLowerCase()}`,
  town, state, county, nearby, local, roads,
});

const ALL: City[] = [
  mk('Crown Point', 'IN', 'Lake County', ['Merrillville', 'Cedar Lake', 'St. John', 'Lowell'],
    "Crown Point is the Lake County seat, with the old courthouse square at its center and new subdivisions going up on every side. That growth means a lot of new homeowners searching Google for contractors, cleaners and shops they haven't picked yet.",
    ['the courthouse square', 'Main St', 'US 231', 'I-65']),
  mk('Merrillville', 'IN', 'Lake County', ['Crown Point', 'Hobart', 'Schererville'],
    "Merrillville sits where US 30 crosses I-65, so it pulls customers from across the county. Businesses along that corridor compete with dozens of others for the same searches, and the ones with a complete Google profile and a real website get the call.",
    ['US 30', 'Broadway', 'I-65', 'Mississippi St']),
  mk('Schererville', 'IN', 'Lake County', ['Dyer', 'St. John', 'Munster', 'Merrillville'],
    "Schererville calls itself the Crossroads of the Nation because US 30 and US 41 meet here. It's dense with restaurants, salons, medical offices and home services, so standing out on Google Maps takes reviews and a profile that's kept up.",
    ['US 30', 'US 41', 'Joliet St']),
  mk('Munster', 'IN', 'Lake County', ['Highland', 'Dyer', 'Hammond', 'Schererville'],
    "Munster sits right on the Illinois line, so its businesses are competing with the south suburbs too. Customers here compare a lot before they call, which makes reviews and a fast, clear website matter even more.",
    ['Ridge Rd', 'Calumet Ave', '45th St']),
  mk('Hobart', 'IN', 'Lake County', ['Merrillville', 'Portage', 'Crown Point'],
    "Hobart mixes an old downtown by Lake George with the big retail along US 30 and Southlake Mall. Small shops downtown and trades on the edge of town both need to show up when someone nearby searches.",
    ['Main St downtown', 'US 30', 'Ridge Rd', 'SR 51']),
  mk('Valparaiso', 'IN', 'Porter County', ['Chesterton', 'Portage', 'Hobart'],
    "Valparaiso is the Porter County seat and home to Valparaiso University, with a busy downtown around Central Park Plaza. Local shops and restaurants here live on word of mouth, and today word of mouth starts with a Google search.",
    ['downtown Lincolnway', 'US 30', 'SR 49', 'Calumet Ave']),
  mk('Portage', 'IN', 'Porter County', ['Chesterton', 'Valparaiso', 'Hobart'],
    "Portage sits between I-94 and the lakefront at Indiana Dunes, with a lot of home services and small shops along US 20 and Central Ave. Most of their customers live within a few miles and find them by searching on a phone.",
    ['US 20', 'Central Ave', 'Willowcreek Rd', 'I-94']),
  mk('Orland Park', 'IL', 'Cook County', ['Tinley Park', 'Chicago'],
    "Orland Park is one of the biggest shopping areas in the southwest suburbs, centered on LaGrange Road and Orland Square. It's crowded on Google, so small businesses here need a sharp profile and pages that say exactly what they do and where.",
    ['LaGrange Rd', '159th St', '143rd St']),
  mk('St. John', 'IN', 'Lake County', ['Schererville', 'Dyer', 'Cedar Lake', 'Crown Point'],
    "St. John has grown fast, with new neighborhoods along US 41. New residents don't have a go-to plumber, salon or lawn crew yet, so they search, and whoever shows up first gets the job.",
    ['US 41', 'US 231', '93rd Ave']),
  mk('Dyer', 'IN', 'Lake County', ['Schererville', 'Munster', 'St. John'],
    "Dyer sits on the state line along US 30, so customers can just as easily drive to Illinois. A clear website and good reviews keep them on this side of the line.",
    ['US 30', 'Sheffield Ave', 'Calumet Ave']),
  mk('Highland', 'IN', 'Lake County', ['Munster', 'Hammond', 'Schererville'],
    "Highland's businesses line Ridge Road and Indianapolis Boulevard, with a lot of family-owned shops and services. Many run on repeat customers and referrals, and those referrals still look you up before they call.",
    ['Ridge Rd', 'Indianapolis Blvd', 'Kennedy Ave']),
  mk('Cedar Lake', 'IN', 'Lake County', ['Crown Point', 'St. John', 'Lowell'],
    "Cedar Lake is built around the lake itself and has been growing, with new homes and a lot of local trades and seasonal businesses. Being easy to find on a phone matters when people search from the dock or the driveway.",
    ['US 41', 'Lakeshore Dr']),
  mk('Chesterton', 'IN', 'Porter County', ['Portage', 'Valparaiso', 'Michigan City'],
    "Chesterton is the gateway town to the Indiana Dunes, with a walkable downtown and its European Market. Visitors and locals both find shops and restaurants on Google Maps, so a full profile with photos and hours pays off.",
    ['downtown Broadway', 'Calumet Rd', 'SR 49', 'US 20']),
  mk('Michigan City', 'IN', 'LaPorte County', ['Chesterton'],
    "Michigan City has the lakefront at Washington Park and the Lighthouse Place outlets, so it gets a lot of visitors who don't know the local businesses. They search Google, and the businesses with the best profiles get found.",
    ['Franklin St', 'US 20', 'US 421', 'I-94']),
  mk('Hammond', 'IN', 'Lake County', ['Munster', 'Highland', 'Calumet City'],
    "Hammond runs from the Lake Michigan shore down to the Little Calumet River, right on the Illinois line. Its shops and services along Indianapolis Boulevard and Calumet Avenue pull customers from both states, so they need to show up on both sides of the line.",
    ['Indianapolis Blvd', 'Calumet Ave', 'Kennedy Ave', 'Hohman Ave']),
  mk('Lowell', 'IN', 'Lake County', ['Cedar Lake', 'Crown Point'],
    "Lowell is a small town in south Lake County, with a classic downtown and farm country all around it. Customers here are loyal, but new families moving in still search Google before they pick a shop or a contractor.",
    ['downtown Commercial Ave', 'SR 2', 'US 41']),
  mk('Lansing', 'IL', 'Cook County', ['Munster', 'Calumet City'],
    "Lansing sits right on the Indiana line, and its businesses on Torrence Avenue and Ridge Road draw from both states. When a customer has two dozen options a few minutes apart, a clear website and good reviews decide who gets the call.",
    ['Torrence Ave', 'Ridge Rd', 'Burnham Ave']),
  mk('Calumet City', 'IL', 'Cook County', ['Hammond', 'Lansing'],
    "Calumet City sits off I-94 near the state line, with busy shopping along Torrence Avenue. Plenty of its customers are passing through, which makes showing up on Google Maps with the right hours and photos especially important.",
    ['Torrence Ave', 'River Oaks Dr', 'State St']),
  mk('Tinley Park', 'IL', 'Cook County', ['Orland Park', 'Chicago'],
    "Tinley Park spreads across Cook and Will County, with a downtown on Oak Park Avenue and big retail along Harlem Avenue and 159th Street. It's a crowded market on Google, so a complete profile and steady reviews matter.",
    ['Oak Park Ave', 'Harlem Ave', '159th St']),
  mk('Chicago', 'IL', 'Cook County', ['Orland Park', 'Tinley Park', 'Calumet City'],
    "Chicago is the biggest market around and the most crowded on Google. A neighborhood shop is competing with the whole city, so showing up comes down to a sharp profile, reviews and pages that say exactly which neighborhoods you serve.",
    ['Western Ave', 'Cicero Ave', 'Halsted St']),
];

import { TOWNS } from './business';
// Same order as TOWNS (west to east), so no single town leads.
export const CITIES: City[] = TOWNS.map((t) => ALL.find((c) => c.town === t)).filter((c): c is City => !!c);

export const cityBySlug = (town: string) => CITIES.find((c) => c.town === town);

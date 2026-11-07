// City pages at /websites-<town>-<state>/ (e.g. /websites-crown-point-in/).
// Add a town here to publish its page. Keep facts to things we know are true:
// county, state and the towns next door. No made-up stats or fake local reviews.
export interface City {
  slug: string;
  town: string;
  state: 'IN' | 'IL';
  county: string;
  nearby: string[];
}

const mk = (town: string, state: 'IN' | 'IL', county: string, nearby: string[]): City => ({
  slug: `websites-${town.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${state.toLowerCase()}`,
  town, state, county, nearby,
});

export const CITIES: City[] = [
  mk('Crown Point', 'IN', 'Lake County', ['Merrillville', 'Cedar Lake', 'St. John', 'Lowell']),
  mk('Merrillville', 'IN', 'Lake County', ['Crown Point', 'Hobart', 'Schererville']),
  mk('Schererville', 'IN', 'Lake County', ['Dyer', 'St. John', 'Munster', 'Merrillville']),
  mk('Munster', 'IN', 'Lake County', ['Highland', 'Dyer', 'Hammond', 'Schererville']),
  mk('Hobart', 'IN', 'Lake County', ['Merrillville', 'Portage', 'Crown Point']),
  mk('Valparaiso', 'IN', 'Porter County', ['Chesterton', 'Portage', 'Hobart']),
  mk('Portage', 'IN', 'Porter County', ['Chesterton', 'Valparaiso', 'Hobart']),
  mk('Orland Park', 'IL', 'Cook County', ['Tinley Park', 'Chicago']),
];

export const cityBySlug = (town: string) => CITIES.find((c) => c.town === town);

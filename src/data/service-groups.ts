// The badge each service page wears and the problem it answers, in the owner's words.
// Badges are plain words (no WEB / SEO / AI codes) and match the buckets in data/buckets.ts.
export const SERVICE_TAGS: Record<string, string> = {
  websites: 'Websites',
  'local-seo': 'Google',
  'never-miss-a-call': 'Calls',
  'business-systems': 'Back office',
  'business-development': 'Back office',
  'it-support': 'Back office',
};

// One line per service in the owner's words, shown under the name. No end punctuation; pages add it.
export const SERVICE_PAIN: Record<string, string> = {
  websites: 'My website looks like 2012',
  'local-seo': 'Nobody finds me on Google',
  'never-miss-a-call': 'I miss calls and nobody follows up',
  'business-systems': "I don't know which jobs make money",
  'business-development': 'I need more customers and a plan',
  'it-support': 'My email, Wi-Fi and laptops are a mess',
};

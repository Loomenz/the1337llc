// How the service pages are grouped on /services/ and which badge each one wears.
export const SERVICE_TAGS: Record<string, string> = {
  websites: 'WEB',
  'local-seo': 'SEO',
  'ai-lead-tools': 'AI',
  'ai-integrations': 'AI',
  'business-systems': 'OPS',
  'business-development': 'OPS',
  'it-support': 'OPS',
};

// One line per service in the owner's words, shown under the name on /services/.
export const SERVICE_PAIN: Record<string, string> = {
  websites: 'My website looks like 2012',
  'local-seo': 'Nobody finds me on Google',
  'ai-lead-tools': "I miss calls and nobody follows up",
  'ai-integrations': 'I keep hearing about AI. Make it do something.',
  'business-systems': "I don't know which jobs make money",
  'business-development': 'I need more customers and a plan',
  'it-support': 'My email, Wi-Fi and laptops are a mess',
};

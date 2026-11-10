// The problem picker on the home page. Each row is a pain in the owner's words,
// and opens to the fix, the price and how fast it goes live.
// Prices come from the approved 2026 price sheet; change them here only.
export interface Fix {
  id: string;
  pain: string;
  name: string; // what the fix is called on the work order
  fix: string;
  cost: string;
  speed: string;
}

export const FIXES: Fix[] = [
  {
    id: 'calls',
    name: 'Missed-call text-back + AI receptionist',
    pain: "I miss calls while I'm working",
    fix: 'Every missed call gets a text back in seconds, signed with your business name. You keep your number. Want more? An AI receptionist picks up, asks what they need and books them on your calendar.',
    cost: 'Text-back $250 + $79/mo. AI receptionist $750 + $199/mo.',
    speed: 'Text-back live in 3–5 days. Receptionist in 1–2 weeks.',
  },
  {
    id: 'site',
    name: 'A website that books jobs',
    pain: 'My website looks like 2012',
    fix: 'A fast site built for phones. Your number up top, real photos of your work, and a contact form that actually reaches you. You own it. No hostage situations.',
    cost: 'Starter $1,200 one time. Pro $2,500.',
    speed: 'Live in 2–3 weeks',
  },
  {
    id: 'google',
    name: 'Google Maps + local SEO',
    pain: 'Nobody finds me on Google',
    fix: 'We fix your Google Business Profile, keep it fresh with posts and photos, and answer your reviews. Every month you see what moved. Want a page for every town you serve? That is the Growth plan.',
    cost: '$300 to set up your Google profile, then $149/mo to manage it.',
    speed: 'First fixes in a week. Rankings take months, and anyone promising #1 is lying.',
  },
  {
    id: 'quotes',
    name: 'Quote calculator + auto follow-up',
    pain: "I'm drowning in quotes and follow-ups",
    fix: 'A price calculator on your site weeds out tire-kickers. Follow-ups go out on their own until the customer says yes or no.',
    cost: '$500 + $149/mo.',
    speed: 'Live in 1–2 weeks',
  },
  {
    id: 'noshow',
    name: 'Confirm + remind texts',
    pain: 'People no-show their appointments',
    fix: 'Every booking gets a confirmation text, a reminder the day before and a one-tap reschedule link. Fewer wasted trips and empty chairs.',
    cost: '$300 + $29/mo with online booking, or included in Front Desk.',
    speed: 'Live in 2–3 days',
  },
  {
    id: 'reviews',
    name: 'Review requests that work',
    pain: 'My reviews are a mess',
    fix: 'After every job the customer gets a short text with a one-tap link to review you on Google. We help you answer the bad ones without losing your cool.',
    cost: '$250 + $79/mo, or included in Front Desk.',
    speed: 'Live in 2 days',
  },
];

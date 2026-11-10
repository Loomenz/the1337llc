// The "see it work" demo on the home page. Every name and number here is made up,
// and the section says so. Each trade plays the same four beats:
// missed call -> text back -> booking -> lead in the dashboard.
export interface DemoTrade {
  id: string;
  label: string;
  shop: string; // what the phone header shows; reads as "your business"
  caller: string;
  ask: string; // customer's first reply
  reply: string; // the assistant's answer with two times
  pick: string; // customer's pick
  job: string; // short job name for the dashboard
  slot: string;
  away: string; // why nobody picked up, in the shop's words
  booked: string; // label on the confirmation card
}

export const DEMO_TRADES: DemoTrade[] = [
  {
    id: 'roofer', label: 'Roofer', shop: 'Your Roofing Co.', caller: 'Dana K.',
    ask: 'Hi, water is coming through the kitchen ceiling after the storm',
    reply: "Sorry about that. We can come look Thursday at 9:00 or 2:00. Which works?",
    pick: '2 works', job: 'Leak, kitchen ceiling', slot: 'Thu 2:00 PM', away: "we're out on a job", booked: 'Estimate booked',
  },
  {
    id: 'plumber', label: 'Plumber', shop: 'Your Plumbing Co.', caller: 'Marcus T.',
    ask: 'Water heater is leaking in the basement',
    reply: "Got it. We can be there today at 4:30 or tomorrow at 8:00. Which works?",
    pick: 'Today please', job: 'Water heater leak', slot: 'Today 4:30 PM', away: "we're out on a job", booked: 'Visit booked',
  },
  {
    id: 'hvac', label: 'HVAC', shop: 'Your Heating & Air', caller: 'Priya S.',
    ask: "Furnace won't kick on and it's 30 degrees out",
    reply: "We'll get you warm. Tonight at 6:00 or tomorrow at 7:30 AM?",
    pick: 'Tonight', job: 'No heat, furnace', slot: 'Tonight 6:00 PM', away: "we're out on a job", booked: 'Visit booked',
  },
  {
    id: 'landscaper', label: 'Landscaper', shop: 'Your Lawn & Landscape', caller: 'Joe R.',
    ask: 'Looking for a quote on a paver patio this spring',
    reply: "Happy to. We can measure Saturday at 10:00 or Monday at 3:00. Which works?",
    pick: 'Saturday', job: 'Paver patio quote', slot: 'Sat 10:00 AM', away: "we're out on a job", booked: 'Estimate booked',
  },
  {
    id: 'shop', label: 'Salon / shop', shop: 'Your Salon', caller: 'Alexis M.',
    ask: 'Do you have anything Friday for a cut and color?',
    reply: "We do. Friday at 11:00 or 3:30?",
    pick: '3:30!', job: 'Cut + color', slot: 'Fri 3:30 PM', away: "we're with a client", booked: 'Appointment booked',
  },
];

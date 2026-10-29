import { imagery } from "@/lib/animals";

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "heading"; text: string };

export type Story = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  standfirst: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body: StoryBlock[];
};

export const stories: Story[] = [
  {
    slug: "the-quiet-maths-of-a-second-chance",
    category: "Adoption",
    title: "The quiet maths of a second chance",
    excerpt:
      "What a senior hound taught a family about patience, and why the slowest matches often hold.",
    standfirst:
      "Baraka was seven, silver around the muzzle, and entirely uninterested in performing for visitors. The Mwangi family were not looking for a project. They were looking for a companion who could keep up with their quiet life.",
    date: "12 September 2026",
    readTime: "5 min read",
    author: "Wanjiru Kamau",
    role: "Founder & field director",
    image: imagery.hero,
    imageAlt: "Baraka, a senior hound, sitting in soft afternoon light",
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The first meeting lasted forty minutes and involved very little. Baraka walked the length of the yard once, inspected a shaded corner, and lay down with his back to everyone. The Mwangis sat on the step and talked about their week. Nobody tried to make it a moment.",
      },
      {
        type: "paragraph",
        text: "This is the part of adoption that does not photograph well. There is no leap, no instant recognition, no music. There is a dog deciding whether the people in front of him are worth the effort of standing up again.",
      },
      {
        type: "quote",
        text: "A good match is not the fastest one. It is the one that is still standing two winters from now.",
        attribution: "Wanjiru Kamau",
      },
      {
        type: "heading",
        text: "What the application could not tell us",
      },
      {
        type: "paragraph",
        text: "On paper, the Mwangis were unremarkable applicants: a rented townhouse in Kileleshwa, one adult working from home, a twelve-year-old daughter, no previous dog. They did not have a garden. They did have a landlord's written permission, a vet two streets away, and a very clear idea of how they wanted their evenings to feel.",
      },
      {
        type: "paragraph",
        text: "Our home visit took thirty-five minutes. We looked at the stairs, the gate latch, the shade on the balcony. We talked about what would happen when the daughter went to university in six years, and whether the dog would still be walked. These are the questions that predict the future better than enthusiasm does.",
      },
      {
        type: "paragraph",
        text: "Baraka moved in on a Thursday. For the first four days he slept in the hallway, refusing the bed we had sent. On the fifth day, he chose the corner of the sitting room nearest the window. On the ninth, he put his head on the daughter's knee while she did her homework. Nobody mentioned it. Nobody wanted to break the spell.",
      },
      {
        type: "heading",
        text: "The arithmetic of staying",
      },
      {
        type: "paragraph",
        text: "Two years later, Baraka is eleven and slower. He takes a joint supplement with breakfast. He has a preferred route around the block and a preferred bench on that route. The Mwangis have rearranged their mornings around both. This is what we mean when we say a match: not a rescue, not a transaction, but a set of small daily decisions that accumulate into a life.",
      },
      {
        type: "quote",
        text: "He did not need us to save him. He needed us to stay.",
        attribution: "Grace Mwangi, adopter",
      },
      {
        type: "paragraph",
        text: "The adoption took eleven days from first enquiry to homecoming. It has lasted two years and counting. The maths is not complicated, but it is quiet, and it asks for the one thing that cannot be assessed in an interview: the willingness to keep showing up.",
      },
    ],
  },
  {
    slug: "a-morning-on-the-ngong-forest-edge",
    category: "Field notes",
    title: "A morning on the Ngong forest edge",
    excerpt:
      "Our rescue team on early calls, community trust, and the animals who find us before we find them.",
    standfirst:
      "The call came at 05:40 from a boda rider who knew the gate. By six, the field team were on the Ngong road with a carry crate, a lead, and a thermos that nobody remembered to drink.",
    date: "28 August 2026",
    readTime: "4 min read",
    author: "Peter Ochieng",
    role: "Field response lead",
    image: imagery.simba,
    imageAlt: "A rescue dog standing in tall grass at the forest edge",
    body: [
      {
        type: "paragraph",
        text: "Most of our rescues do not begin with us. They begin with a security guard, a shopkeeper, a boda rider, or a child who has been watching the same dog for three days. By the time the call reaches our desk, someone has already made a decision to care. Our job is to make that decision useful.",
      },
      {
        type: "paragraph",
        text: "That morning it was a young ridgeback mix, later named Simba, holding his ground beside an abandoned storehouse. He was thin, dehydrated, and not interested in being coaxed. We sat at a distance for twenty minutes and let him decide. When he finally approached, it was for water, not for us.",
      },
      {
        type: "quote",
        text: "You cannot rush an animal into trusting you. You can only make trust less expensive.",
        attribution: "Peter Ochieng",
      },
      {
        type: "heading",
        text: "The part that is not on camera",
      },
      {
        type: "paragraph",
        text: "A rescue is mostly waiting. Waiting for the right approach, the right crate angle, the right moment to loop a lead without making it a chase. It is also paperwork: a location note, a condition log, a photograph for the registry, a call to the partner clinic. The drama, when it comes, is brief and usually quiet.",
      },
      {
        type: "paragraph",
        text: "Simba spent four months at Karen Ridge. Nutrition first, then dental care, then slow social integration with our senior behaviourist. He is not a grateful dog in the way people imagine. He is a dog with preferences, boundaries, and a deep dislike of raised voices. That is a better outcome than gratitude.",
      },
      {
        type: "heading",
        text: "Why community trust is the real infrastructure",
      },
      {
        type: "paragraph",
        text: "We do not have a fleet of ambulances. We have a phone number that people trust, and a network of monitors who know which gates to knock on. That network took years to build and is more valuable than any vehicle. It is also the reason we answer every call, even the ones that turn out to be nothing.",
      },
      {
        type: "paragraph",
        text: "By 08:15 that morning, Simba was in the clinic and the team were back on the road. The thermos was still full. There would be two more calls before lunch, one of them a false alarm, one of them a cat in a drain. Both mattered. Both got an answer.",
      },
    ],
  },
  {
    slug: "what-good-fostering-actually-asks-of-you",
    category: "Welfare",
    title: "What good fostering actually asks of you",
    excerpt:
      "Not a forever home. Not a finished dog. Just a safe room, a routine, and the willingness to let go.",
    standfirst:
      "Fostering is often described as a bridge. The metaphor is useful, but it hides the labour: the first sleepless night, the accidents, the slow unlearning of fear, and the day you have to say goodbye.",
    date: "14 August 2026",
    readTime: "6 min read",
    author: "Njeri Mwangi",
    role: "Foster & behaviour coordinator",
    image: imagery.care,
    imageAlt: "A foster carer sitting with a rescue dog in a calm home",
    body: [
      {
        type: "paragraph",
        text: "People often ask whether they are 'allowed' to foster if they work, rent, have children, or have never owned a dog. The honest answer is that there is no single foster profile. There are, however, non-negotiables: a safe space, a consistent routine, and the willingness to communicate honestly when something is not working.",
      },
      {
        type: "heading",
        text: "The first seventy-two hours",
      },
      {
        type: "paragraph",
        text: "A foster animal is not a guest. They are a displaced creature in an unfamiliar house, with unfamiliar smells and rules. The kindest thing you can do in the first three days is nothing much: a quiet room, a predictable feeding time, a short walk at the same hour, and minimal visitors. Resist the urge to introduce them to everyone you know.",
      },
      {
        type: "quote",
        text: "A foster home does not need to be calm. It needs to be consistent.",
        attribution: "Njeri Mwangi",
      },
      {
        type: "paragraph",
        text: "We provide a written settling plan for every placement. It includes what to feed, where to sleep, how to introduce resident animals, and what to do when the animal refuses to eat. It also includes our phone number, which is answered by a person who has done this before.",
      },
      {
        type: "heading",
        text: "The part nobody warns you about",
      },
      {
        type: "paragraph",
        text: "You will become attached. This is not a failure of professionalism. It is the mechanism by which the animal heals. The difficulty is that the attachment has an expiry date, and the expiry date is the point of the exercise. We do not pretend this is easy. We do prepare you for it, and we stay in touch after the adoption.",
      },
      {
        type: "paragraph",
        text: "Some fosters become adopters. Some become repeat fosters. Some do one placement and decide it is not for them. All three are useful outcomes. The animal needed a bridge, not a permanent identity for you.",
      },
      {
        type: "paragraph",
        text: "If you are considering it, start with a short placement: a medical recovery, a weekend respite, a litter that needs eight weeks of socialisation. You will learn more from one real week than from any amount of reading. We will be there for the difficult parts.",
      },
    ],
  },
  {
    slug: "why-we-will-not-split-a-bonded-pair",
    category: "Welfare",
    title: "Why we will not split a bonded pair",
    excerpt:
      "Amani and Kendi sleep curled into one another. That is not a detail. It is the whole placement.",
    standfirst:
      "Every few months, someone asks whether they can take one of a bonded pair. The answer is always no. This is not sentimentality. It is a welfare decision with a clear rationale.",
    date: "30 July 2026",
    readTime: "3 min read",
    author: "Dr. Asha Patel",
    role: "Consulting veterinarian",
    image: imagery.pair,
    imageAlt: "A bonded pair of young dogs resting together",
    body: [
      {
        type: "paragraph",
        text: "Amani and Kendi were found beneath a collapsed water tank on an abandoned farm outside Naivasha. They were eight weeks old, underweight, and entirely dependent on each other. Six months later, they still sleep in contact and check on one another when separated by a gate.",
      },
      {
        type: "paragraph",
        text: "Bonding in dogs is not a human projection. It is an observable attachment behaviour: proximity-seeking, distress on separation, and physiological stress responses. In severe cases, separating a bonded pair can trigger appetite loss, destructiveness, and prolonged anxiety. The risk is highest in animals who bonded during early development or trauma.",
      },
      {
        type: "quote",
        text: "We are not protecting a story. We are protecting a nervous system.",
        attribution: "Dr. Asha Patel",
      },
      {
        type: "heading",
        text: "What we do instead",
      },
      {
        type: "paragraph",
        text: "We wait longer. We market the pair together, assess homes for capacity to take two, and sometimes arrange a shared foster placement while a permanent home is found. It is slower and more expensive. It is also the reason we have never had a bonded pair returned for separation-related distress.",
      },
      {
        type: "paragraph",
        text: "If you are drawn to Amani and Kendi, come and meet them both. Watch how they move through the yard. The pair is not a compromise on the adoption; it is the adoption.",
      },
    ],
  },
  {
    slug: "the-clinic-ledger",
    category: "Transparency",
    title: "The clinic ledger: what a vaccination actually costs",
    excerpt:
      "A line-by-line look at the real costs behind a routine course of care — and why the numbers matter.",
    standfirst:
      "Donors deserve specifics. Here is what our 2026 clinic ledger says about a standard vaccination course, a sterilisation, and an emergency admission at Karen Ridge.",
    date: "18 July 2026",
    readTime: "4 min read",
    author: "Grace Wambui",
    role: "Finance & operations",
    image: imagery.hands,
    imageAlt: "A hand resting gently on a rescue dog",
    body: [
      {
        type: "paragraph",
        text: "A DHPP course for a medium dog costs KES 1,050 at our partner clinic, inclusive of consultation and cold-chain handling. A FVRCP course for a cat costs KES 900. These are not estimates; they are the figures on our June invoices.",
      },
      {
        type: "paragraph",
        text: "A sterilisation, including anaesthesia, pain relief, and a night of recovery, averages KES 3,500 for a female dog and KES 2,800 for a male. An emergency road-traffic admission begins at KES 9,000 and can exceed KES 40,000 if orthopaedic surgery is required. Every major procedure is approved by two veterinarians before we commit.",
      },
      {
        type: "quote",
        text: "Transparency is not a marketing position. It is how a small trust earns the right to keep asking.",
        attribution: "Grace Wambui",
      },
      {
        type: "heading",
        text: "What the numbers do not show",
      },
      {
        type: "paragraph",
        text: "They do not show the staff time spent chasing a reluctant landlord, or the fuel for a 90-minute rescue in Naivasha, or the bedding that is washed four times a week. Those costs sit in the shelter and response lines of our budget, which is why unrestricted gifts matter as much as restricted ones.",
      },
      {
        type: "paragraph",
        text: "Our full FY2025 accounts are available on request. If you would like the clinic ledger for a specific case, ask. We will send it.",
      },
    ],
  },
  {
    slug: "a-home-visit-is-not-an-inspection",
    category: "Adoption",
    title: "A home visit is not an inspection",
    excerpt:
      "What we actually look for when we visit — and why a rented flat can be a better home than a large garden.",
    standfirst:
      "The word 'inspection' makes people tidy their shelves and hide the laundry. We would rather see the laundry. A home visit is a practical conversation about safety, routine, and fit.",
    date: "2 July 2026",
    readTime: "4 min read",
    author: "Wanjiru Kamau",
    role: "Founder & field director",
    image: imagery.golden,
    imageAlt: "A dog resting in warm afternoon light",
    body: [
      {
        type: "paragraph",
        text: "We are not counting cushions. We are looking at the gate latch, the balcony railing, the road outside, the shade in the afternoon, and whether the space can accommodate a crate or a quiet bed. We are also listening to how you talk about your days.",
      },
      {
        type: "paragraph",
        text: "A large garden is not automatically better than a flat. A garden can be a place to be left alone. A flat with a committed walking routine can be a richer life. What matters is the quality of the daily contact, not the square footage.",
      },
      {
        type: "quote",
        text: "We are not looking for a perfect house. We are looking for a home that can hold a routine.",
        attribution: "Wanjiru Kamau",
      },
      {
        type: "heading",
        text: "The questions we will ask",
      },
      {
        type: "paragraph",
        text: "Who is at home during the day? Where will the animal sleep in the first week? What happens when you travel? Who walks the dog when you are ill? These are not traps. They are the questions that prevent a return six months from now.",
      },
      {
        type: "paragraph",
        text: "If something needs changing — a fence panel, a window restrictor, a gate spring — we will say so and help you sort it. The visit ends with a plan, not a verdict.",
      },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getRelatedStories(slug: string, limit = 3) {
  const current = getStory(slug);
  if (!current) return stories.slice(0, limit);
  return stories
    .filter((story) => story.slug !== slug)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, limit);
}

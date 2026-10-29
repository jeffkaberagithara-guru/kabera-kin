const img = {
  simba: "/images/photos/simba.jpg",
  amari: "/images/photos/amari.jpg",
  kito: "/images/photos/kito.jpg",
  jabari: "/images/photos/jabari.jpg",
  pair: "/images/photos/pair.jpg",
  golden: "/images/photos/golden.jpg",
  hero: "/images/photos/baraka.jpg",
  nyota: "/images/photos/nyota.jpg",
  zuri: "/images/photos/zuri.jpg",
  malaika: "/images/photos/malaika.jpg",
  makena: "/images/photos/makena.jpg",
  care: "/images/photos/care.jpg",
  hands: "/images/photos/hands.jpg",
};

const curatedImages = {
  sanctuary: "/images/photos/sanctuary.jpg",
  volunteer: "/images/photos/volunteer.jpg",
  clinic: "/images/photos/clinic.jpg",
  fieldwork: "/images/photos/fieldwork.jpg",
  homecoming: "/images/photos/homecoming.jpg",
  rescue: "/images/photos/simba.jpg",
  foster: "/images/photos/care.jpg",
};

export const imagery = { ...img, ...curatedImages };

export type Compatibility = {
  label: string;
  value: string;
  tone: "good" | "note";
};

export type MedicalRecord = {
  label: string;
  value: string;
  note: string;
};

export type GalleryFrame = {
  src: string;
  alt: string;
  label: string;
};

export type Animal = {
  slug: string;
  name: string;
  registry: string;
  species: "Dog" | "Cat";
  breed: string;
  age: string;
  ageGroup: "Puppy" | "Kitten" | "Young" | "Adult" | "Senior";
  sex: string;
  size: string;
  station: string;
  county: string;
  status: string;
  urgent: boolean;
  bonded?: boolean;
  summary: string;
  personality: string;
  quote: string;
  traits: string[];
  compatibility: Compatibility[];
  medical: MedicalRecord[];
  story: string[];
  image: string;
  gallery: GalleryFrame[];
  goodWith: string;
  energy: string;
  training: string;
  intake: string;
  colour: string;
};

export const animals: Animal[] = [
  {
    slug: "simba",
    name: "Simba",
    registry: "KK-904",
    species: "Dog",
    breed: "African Ridgeback & Shepherd mix",
    age: "2 years",
    ageGroup: "Young",
    sex: "Male, neutered",
    size: "Large · 26 kg",
    station: "Karen Ridge",
    county: "Nairobi",
    status: "Foster or adopt",
    urgent: true,
    summary:
      "A steady, discerning companion found guarding an abandoned storehouse on the Ngong forest edge.",
    personality:
      "Simba carries the quiet attentiveness of a Ridgeback and the deep loyalty of a Shepherd. He greets familiar faces with a soft lean rather than a leap, walks without pulling, and settles quickly when the day slows down.",
    quote:
      "He does not ask for much. A long walk, a shaded corner, and the reassurance that someone is coming back.",
    traits: ["Gentle guardian", "Leash attentive", "Garden required", "Quiet indoors"],
    compatibility: [
      {
        label: "Children",
        value: "Comfortable with children aged seven and above. Patient, forgiving body language.",
        tone: "good",
      },
      {
        label: "Other dogs",
        value: "Passed multi-dog pack assessments with calm, non-reactive curiosity.",
        tone: "good",
      },
      {
        label: "Cats",
        value: "Moderate prey curiosity. A gradual, supervised introduction is advised.",
        tone: "note",
      },
      {
        label: "Home",
        value: "Needs a securely fenced garden and a predictable daily walking rhythm.",
        tone: "good",
      },
    ],
    medical: [
      {
        label: "Vaccinations",
        value: "DHPP 5-in-1 booster",
        note: "Current · next due Aug 2026",
      },
      {
        label: "Rabies",
        value: "Nairobi County certified",
        note: "Tag KVB-RAB-9932",
      },
      {
        label: "Microchip",
        value: "ISO 11784 · KE-982-1049",
        note: "Linked to national registry",
      },
      {
        label: "Screening",
        value: "Negative for Ehrlichia, Babesia and heartworm",
        note: "Full panel on file",
      },
    ],
    story: [
      "In May 2025 our field team responded to a community report near the forested border of Ngong. Simba was found dehydrated and undernourished, holding his ground beside an abandoned construction storehouse with a dignity that surprised everyone.",
      "Four months at Karen Ridge followed: nutritional rebuilding, dental care, and slow social reintegration with our senior behaviourist. He has recovered his strength and his natural equilibrium. What remains is a deep preference for calm company and the daily ritual of a long, unhurried walk.",
    ],
    image: img.simba,
    gallery: [
      { src: img.simba, alt: "Simba resting in dappled light at the Karen sanctuary", label: "Portrait" },
      { src: img.pair, alt: "Simba walking with another dog on the sanctuary grounds", label: "Yard" },
      { src: img.care, alt: "A carer sitting with a rescue dog in a quiet room", label: "Carer" },
      { src: img.hero, alt: "Close portrait of a dog in warm afternoon light", label: "Detail" },
    ],
    goodWith: "Children 7+",
    energy: "Moderate",
    training: "Basic obedience",
    intake: "4 months in care",
    colour: "Warm tawny & sable",
  },
  {
    slug: "nyota",
    name: "Nyota",
    registry: "KK-104",
    species: "Cat",
    breed: "Domestic calico",
    age: "1 year",
    ageGroup: "Young",
    sex: "Female, spayed",
    size: "Small · 3.6 kg",
    station: "Runda",
    county: "Nairobi",
    status: "Available",
    urgent: false,
    summary:
      "Rescued as a malnourished kitten near Limuru Road, now a joyful explorer with a considerable purr.",
    personality:
      "Nyota is curious without being frantic, affectionate without being demanding. She likes to supervise whatever you are doing, then fall asleep in the warmest square of sunlight she can find.",
    quote: "A small cat with the confidence of a much larger one.",
    traits: ["Playful", "Inquisitive", "Lap warm", "Apartment calm"],
    compatibility: [
      { label: "Children", value: "Gentle with considerate children aged six and above.", tone: "good" },
      { label: "Other cats", value: "Has shared a room comfortably with two resident cats.", tone: "good" },
      { label: "Dogs", value: "Untested. A calm, cat-aware dog may be considered.", tone: "note" },
      { label: "Home", value: "Happy in an apartment with a secure window and vertical space.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "FVRCP course complete", note: "Booster due Feb 2027" },
      { label: "Rabies", value: "Vaccinated", note: "Tag KVB-RAB-8821" },
      { label: "Microchip", value: "ISO 11784 · KE-441-2201", note: "Registered" },
      { label: "Screening", value: "FeLV / FIV negative", note: "Tested on intake and at 8 weeks" },
    ],
    story: [
      "Nyota arrived at eight weeks old, small enough to fit in a pair of cupped hands. She had been living behind a food kiosk near Limuru Road and was severely underweight.",
      "Our clinic treated her for parasites and a minor respiratory infection. In foster care she discovered windowsills, cardboard boxes, and the reliable pleasure of a lap. She is now ready to choose a person of her own.",
    ],
    image: img.nyota,
    gallery: [
      { src: img.nyota, alt: "Nyota the calico cat looking toward the camera", label: "Portrait" },
      { src: img.zuri, alt: "Calico cat resting by a sunlit window", label: "Window" },
      { src: img.amari, alt: "A calm cat resting indoors", label: "Foster" },
      { src: img.makena, alt: "Close detail of a cat's face in soft light", label: "Detail" },
    ],
    goodWith: "Other cats",
    energy: "Playful",
    training: "Litter trained",
    intake: "9 months in care",
    colour: "Calico",
  },
  {
    slug: "baraka",
    name: "Baraka",
    registry: "KK-328",
    species: "Dog",
    breed: "Kenyan Ridgeback hound mix",
    age: "7 years",
    ageGroup: "Senior",
    sex: "Male, neutered",
    size: "Large · 29 kg",
    station: "Tigoni",
    county: "Kiambu",
    status: "Available",
    urgent: false,
    summary:
      "A gentleman with impeccable leash manners and a quiet presence, seeking a peaceful garden for his later years.",
    personality:
      "Baraka is the dog who notices everything and says very little. He is unhurried, deeply devoted, and happiest when his people are within sight. He would suit a quiet household that values long, slow afternoons.",
    quote:
      "Some animals arrive already knowing how to be still. Baraka teaches the rest of us.",
    traits: ["Calm", "Devoted", "Senior soul", "House trained"],
    compatibility: [
      { label: "Children", value: "Gentle with older children; prefers a calm household.", tone: "good" },
      { label: "Other dogs", value: "Coexists peacefully with calm dogs. Prefers not to share meals.", tone: "note" },
      { label: "Cats", value: "Has lived alongside a resident cat without incident.", tone: "good" },
      { label: "Home", value: "A grassy garden and a soft indoor bed are his only requirements.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "DHPP and rabies current", note: "Annual booster scheduled" },
      { label: "Dental", value: "Scale and polish completed", note: "Jan 2026" },
      { label: "Microchip", value: "ISO 11784 · KE-118-7734", note: "Registered" },
      { label: "Mobility", value: "Mild age-related stiffness", note: "Managed with joint support" },
    ],
    story: [
      "Baraka was surrendered by a family relocating abroad. He arrived with a labelled collar, a favourite blanket, and the unmistakable bewilderment of an animal who had done nothing wrong.",
      "He has settled into Tigoni with characteristic grace. Our team would love to place him in a home where he can keep his routines: a morning walk, a garden to inspect, and a person to sit beside in the evening.",
    ],
    image: img.hero,
    gallery: [
      { src: img.hero, alt: "Baraka, a senior hound, sitting in soft light", label: "Portrait" },
      { src: img.jabari, alt: "A hound resting in a garden", label: "Garden" },
      { src: img.hands, alt: "A hand resting gently on a dog", label: "Detail" },
      { src: img.simba, alt: "A dog walking on a lead in the highlands", label: "Walk" },
    ],
    goodWith: "Calm homes",
    energy: "Low",
    training: "Fully trained",
    intake: "7 months in care",
    colour: "Silvered sable",
  },
  {
    slug: "amani-kendi",
    name: "Amani & Kendi",
    registry: "KK-89",
    species: "Dog",
    breed: "Savanna terrier crosses",
    age: "8 months",
    ageGroup: "Puppy",
    sex: "Female & male, neutered",
    size: "Medium · 11 kg each",
    station: "Naivasha",
    county: "Nakuru",
    status: "Bonded pair",
    urgent: true,
    bonded: true,
    summary:
      "Two sibling spirits rescued from an abandoned farmstead, inseparable and entirely convinced that life is a game.",
    personality:
      "Amani is the planner; Kendi is the comedian. Together they turn a garden into a theatre. They sleep curled into one another and should be placed as a pair, without exception.",
    quote: "Two hearts, one shadow.",
    traits: ["Bonded pair", "High energy", "Quick learners", "Garden required"],
    compatibility: [
      { label: "Children", value: "Bubbly and safe with children aged eight and above.", tone: "good" },
      { label: "Other dogs", value: "Confident in group play; would thrive with a tolerant older dog.", tone: "good" },
      { label: "Cats", value: "Too interested. A feline-free home is recommended.", tone: "note" },
      { label: "Home", value: "A fenced garden and an active household. They must stay together.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "DHPP course complete", note: "Boosters current" },
      { label: "Rabies", value: "Vaccinated", note: "Tags KVB-RAB-6612 / 6613" },
      { label: "Microchip", value: "Dual ISO microchips", note: "Registered as a pair" },
      { label: "Neutering", value: "Both neutered", note: "Recovered, no complications" },
    ],
    story: [
      "A neighbour reported two puppies living beneath a collapsed water tank on an abandoned farm outside Naivasha. They were wary, hungry, and entirely dependent on each other.",
      "Six weeks of gentle handling later, they are the first to greet visitors and the last to tire. We are looking for one home willing to take both — a promise we do not compromise on.",
    ],
    image: img.pair,
    gallery: [
      { src: img.pair, alt: "Amani and Kendi running together across grass", label: "Together" },
      { src: img.kito, alt: "One of the puppies looking up", label: "Amani" },
      { src: img.golden, alt: "A young dog resting after play", label: "Kendi" },
      { src: img.care, alt: "A carer playing with a young dog", label: "Play" },
    ],
    goodWith: "Active families",
    energy: "High",
    training: "Puppy classes",
    intake: "2 months in care",
    colour: "Sandy tan & brindle",
  },
  {
    slug: "amari",
    name: "Amari",
    registry: "KK-512",
    species: "Dog",
    breed: "Kenyan mixed breed",
    age: "2 years",
    ageGroup: "Young",
    sex: "Male, neutered",
    size: "Medium · 18 kg",
    station: "Karen Ridge",
    county: "Nairobi",
    status: "Available",
    urgent: false,
    summary:
      "A gentle, intelligent companion with a gift for making ordinary afternoons feel deliberate.",
    personality:
      "Amari is quietly sociable. He enjoys the company of people, checks in often on walks, and has a particular fondness for a tennis ball that has seen better days.",
    quote: "He makes a home feel less like a place and more like a habit.",
    traits: ["Even tempered", "Food motivated", "Good recall", "Apartment possible"],
    compatibility: [
      { label: "Children", value: "Kind and steady with children of all ages.", tone: "good" },
      { label: "Other dogs", value: "Social and playful with dogs of a similar size.", tone: "good" },
      { label: "Cats", value: "Has met cats calmly at the sanctuary.", tone: "good" },
      { label: "Home", value: "A townhouse with a small garden or a committed walking routine.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "DHPP and rabies current", note: "Next due Sep 2026" },
      { label: "Neutering", value: "Neutered", note: "Completed at intake" },
      { label: "Microchip", value: "ISO 11784 · KE-662-3308", note: "Registered" },
      { label: "Screening", value: "Full blood panel normal", note: "Copy available" },
    ],
    story: [
      "Amari was brought to us by a security team who found him sleeping in the guardhouse of a construction site. He was thin but remarkably composed.",
      "He has since become a favourite with volunteers. He learns quickly, forgives easily, and seems to believe that most problems can be solved by a walk and a good sniff.",
    ],
    image: img.amari,
    gallery: [
      { src: img.amari, alt: "Amari looking at the camera in warm light", label: "Portrait" },
      { src: img.golden, alt: "Amari running in the sanctuary garden", label: "Yard" },
      { src: img.care, alt: "A volunteer sitting with a dog", label: "Carer" },
      { src: img.hands, alt: "A hand resting on a dog's head", label: "Detail" },
    ],
    goodWith: "Everyone",
    energy: "Moderate",
    training: "Good recall",
    intake: "3 months in care",
    colour: "Honey & white",
  },
  {
    slug: "zuri",
    name: "Zuri",
    registry: "KK-217",
    species: "Cat",
    breed: "Domestic shorthair",
    age: "4 years",
    ageGroup: "Adult",
    sex: "Female, spayed",
    size: "Small · 4.1 kg",
    station: "Runda",
    county: "Nairobi",
    status: "Available",
    urgent: false,
    summary:
      "An observant, independent cat who prefers a quiet windowsill and one person to call her own.",
    personality:
      "Zuri is not a lap cat, and she is not sorry about it. She shows affection by proximity: a chair nearby, a slow blink, the occasional deliberate head-bump at dusk.",
    quote: "Affection, on her terms, is still affection.",
    traits: ["Independent", "Quiet", "Litter trained", "Adult calm"],
    compatibility: [
      { label: "Children", value: "Prefers a household with teenagers or adults.", tone: "note" },
      { label: "Other cats", value: "Happily lives alongside other cats with separate resources.", tone: "good" },
      { label: "Dogs", value: "Untested; a calm dog may be possible with time.", tone: "note" },
      { label: "Home", value: "A quiet apartment with a secure balcony or window.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "FVRCP current", note: "Next due Mar 2027" },
      { label: "Rabies", value: "Vaccinated", note: "Tag KVB-RAB-5520" },
      { label: "Microchip", value: "ISO 11784 · KE-339-1187", note: "Registered" },
      { label: "Screening", value: "FeLV / FIV negative", note: "Tested 2025" },
    ],
    story: [
      "Zuri came to us after her elderly guardian moved into assisted care. She was well loved and well fed, and entirely unprepared for a shelter.",
      "She has adjusted in her own time. We are looking for a quiet home that will let her decide when to trust — and will not take it personally when she chooses the windowsill over the sofa.",
    ],
    image: img.zuri,
    gallery: [
      { src: img.zuri, alt: "Zuri, a domestic shorthair, by a window", label: "Portrait" },
      { src: img.nyota, alt: "Zuri resting in a patch of sunlight", label: "Window" },
      { src: img.makena, alt: "A close detail of a calm cat", label: "Detail" },
      { src: img.care, alt: "A person reading with a cat nearby", label: "Home" },
    ],
    goodWith: "Quiet homes",
    energy: "Low",
    training: "Litter trained",
    intake: "5 months in care",
    colour: "Charcoal tabby",
  },
  {
    slug: "kito",
    name: "Kito",
    registry: "KK-671",
    species: "Dog",
    breed: "Mixed breed",
    age: "5 months",
    ageGroup: "Puppy",
    sex: "Male",
    size: "Small · 6 kg",
    station: "Karen Ridge",
    county: "Nairobi",
    status: "Foster first",
    urgent: false,
    summary:
      "A bright, busy puppy with oversized paws and a sincere belief that everything is edible.",
    personality:
      "Kito is all forward motion. He is learning sit, settle, and the radical idea that shoes are not food. A patient home with time for training will be rewarded with an exceptionally warm dog.",
    quote: "Everything is new. Everything is worth investigating.",
    traits: ["Playful", "Food motivated", "Needs training", "Foster first"],
    compatibility: [
      { label: "Children", value: "Would love a family with children aged eight and above.", tone: "good" },
      { label: "Other dogs", value: "Confident and playful with dogs who can teach him manners.", tone: "good" },
      { label: "Cats", value: "Too young to test reliably; a feline-free home is preferred.", tone: "note" },
      { label: "Home", value: "A garden and a family committed to daily training and play.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "First two DHPP doses complete", note: "Course ongoing" },
      { label: "Deworming", value: "Up to date", note: "Monthly until six months" },
      { label: "Microchip", value: "Implanted at neutering", note: "Scheduled" },
      { label: "Neutering", value: "To be completed at six months", note: "Covered by Kabera Kin" },
    ],
    story: [
      "Kito was one of five puppies left in a cardboard box outside a Karen hardware store. Four found foster placements within a week. Kito stayed with us, largely because he could not sit still long enough to be photographed.",
      "He is now crate trained, almost house trained, and entirely convinced that he is a large dog. We are looking for a foster-to-adopt home that can keep up.",
    ],
    image: img.kito,
    gallery: [
      { src: img.kito, alt: "Kito the puppy looking up at the camera", label: "Portrait" },
      { src: img.pair, alt: "Kito playing with another young dog", label: "Play" },
      { src: img.care, alt: "A carer holding a puppy", label: "Carer" },
      { src: img.golden, alt: "A young dog resting in the grass", label: "Rest" },
    ],
    goodWith: "Active homes",
    energy: "High",
    training: "In progress",
    intake: "6 weeks in care",
    colour: "Brown & white",
  },
  {
    slug: "malaika",
    name: "Malaika",
    registry: "KK-118",
    species: "Cat",
    breed: "Domestic shorthair",
    age: "4 months",
    ageGroup: "Kitten",
    sex: "Female, spayed",
    size: "Small · 1.8 kg",
    station: "Tigoni",
    county: "Kiambu",
    status: "Available",
    urgent: false,
    summary:
      "A small, self-possessed kitten with a loud purr and an unshakeable interest in shoelaces.",
    personality:
      "Malaika is sociable, bold, and endlessly entertained. She would do well in a home with another young cat or a patient older cat willing to indulge her.",
    quote: "A kitten is a small argument for paying attention.",
    traits: ["Social", "Bold", "Playful", "Other cats"],
    compatibility: [
      { label: "Children", value: "Comfortable with gentle children aged five and above.", tone: "good" },
      { label: "Other cats", value: "Would benefit from a playful resident cat.", tone: "good" },
      { label: "Dogs", value: "Has not met dogs. A cat-aware dog could be considered.", tone: "note" },
      { label: "Home", value: "Indoor home with enrichment and a secure window.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "FVRCP first course complete", note: "Booster scheduled" },
      { label: "Deworming", value: "Up to date", note: "Monthly" },
      { label: "Microchip", value: "Implanted", note: "KE-771-2290" },
      { label: "Spaying", value: "Completed", note: "Recovered well" },
    ],
    story: [
      "Malaika was found in the engine bay of a car parked in Tigoni. She was four weeks old, covered in oil, and furious.",
      "She has since been cleaned, socialised, and thoroughly spoiled by our Tigoni team. She is now ready to be someone's whole personality.",
    ],
    image: img.malaika,
    gallery: [
      { src: img.malaika, alt: "Malaika the kitten looking at the camera", label: "Portrait" },
      { src: img.nyota, alt: "A kitten curled in a blanket", label: "Rest" },
      { src: img.care, alt: "A person playing with a kitten", label: "Play" },
      { src: img.makena, alt: "A close-up of a kitten's eyes", label: "Detail" },
    ],
    goodWith: "Gentle homes",
    energy: "Playful",
    training: "Litter trained",
    intake: "7 weeks in care",
    colour: "Grey & white",
  },
  {
    slug: "jabari",
    name: "Jabari",
    registry: "KK-440",
    species: "Dog",
    breed: "Kenyan village dog",
    age: "5 years",
    ageGroup: "Adult",
    sex: "Male, neutered",
    size: "Medium · 20 kg",
    station: "Naivasha",
    county: "Nakuru",
    status: "Available",
    urgent: false,
    summary:
      "A resilient, affectionate dog who would rather be near you than anywhere else in the world.",
    personality:
      "Jabari is sociable, sturdy, and remarkably tuned in to human mood. He is the sort of dog who leans against your leg when you are having a difficult day.",
    quote: "Loyalty is not a trick he was taught. It is simply what he is.",
    traits: ["Affectionate", "Steady", "Good with dogs", "Rural ready"],
    compatibility: [
      { label: "Children", value: "Warm and tolerant with children of all ages.", tone: "good" },
      { label: "Other dogs", value: "Relaxed and non-confrontational in group settings.", tone: "good" },
      { label: "Cats", value: "Interested but manageable; a slow introduction is advised.", tone: "note" },
      { label: "Home", value: "A compound or smallholding with room to roam safely.", tone: "good" },
    ],
    medical: [
      { label: "Vaccinations", value: "DHPP and rabies current", note: "Next due Nov 2026" },
      { label: "Neutering", value: "Neutered", note: "Completed at intake" },
      { label: "Microchip", value: "ISO 11784 · KE-220-9910", note: "Registered" },
      { label: "Screening", value: "Negative for tick-borne disease", note: "Full panel on file" },
    ],
    story: [
      "Jabari spent the first years of his life on a flower farm near Naivasha, where he was fed by workers and slept beneath a packing shed. When the farm changed hands, he was left behind.",
      "He has adapted to sanctuary life with good humour. He walks beautifully on a lead, greets every visitor, and would make an outstanding family dog for a household with a little outdoor space.",
    ],
    image: img.jabari,
    gallery: [
      { src: img.jabari, alt: "Jabari sitting in the Naivasha grounds", label: "Portrait" },
      { src: img.simba, alt: "Jabari on a walk with his carer", label: "Walk" },
      { src: img.care, alt: "Jabari resting near a volunteer", label: "Carer" },
      { src: img.hero, alt: "A dog resting in the late afternoon", label: "Detail" },
    ],
    goodWith: "Families",
    energy: "Moderate",
    training: "Leash trained",
    intake: "8 months in care",
    colour: "Tan & black",
  },
];

export const featuredAnimals = animals.filter((animal) =>
  ["simba", "nyota", "baraka"].includes(animal.slug),
);

export function getAnimal(slug: string) {
  return animals.find((animal) => animal.slug === slug);
}

export function getRelatedAnimals(slug: string, limit = 3) {
  const current = getAnimal(slug);
  if (!current) return animals.slice(0, limit);
  return animals
    .filter((animal) => animal.slug !== slug)
    .sort((a, b) => {
      const score = (animal: Animal) =>
        (animal.species === current.species ? 2 : 0) +
        (animal.station === current.station ? 1 : 0);
      return score(b) - score(a);
    })
    .slice(0, limit);
}

export const registryStats = [
  { value: "342", label: "Verified adoptions" },
  { value: "48", label: "Animals in care" },
  { value: "14", label: "Partner sanctuaries" },
];

export const stations = [
  { name: "Karen Ridge", county: "Nairobi", note: "Headquarters & medical wing" },
  { name: "Runda", county: "Nairobi", note: "Feline Pavilion" },
  { name: "Tigoni", county: "Kiambu", note: "Senior & recovery haven" },
  { name: "Naivasha", county: "Nakuru", note: "Field station & fostering" },
];


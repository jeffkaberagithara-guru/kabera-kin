import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Practical safety guidance for visiting the sanctuary, meeting an animal, fostering, and reporting a welfare concern.",
};

const sections = [
  {
    id: "visiting",
    title: "Visiting the sanctuary",
    paragraphs: [
      "Open mornings run every Saturday from 09:00 to 12:00 at Karen Ridge and Runda. Children must be supervised at all times. Do not enter a kennel, enclosure, or clinic area without a staff member present, even if a gate appears open.",
    ],
    list: [
      "Wear closed shoes and leave loose jewellery at home",
      "Do not feed any animal without asking a carer",
      "Ask before photographing other visitors or volunteers",
      "Follow staff instructions immediately if an animal becomes agitated",
    ],
  },
  {
    id: "meeting",
    title: "Meeting an animal",
    paragraphs: [
      "Every introduction is supervised. Let the animal approach you, offer a closed hand, and avoid direct eye contact or reaching over the head. Do not pick up an animal unless a carer invites you to. If an animal retreats, let them go; it is not a rejection.",
    ],
  },
  {
    id: "children",
    title: "Children and animals",
    paragraphs: [
      "Children are welcome and encouraged to meet animals, with supervision. Explain beforehand that animals need quiet voices and gentle hands. An adult should remain within arm's reach during any interaction, and no child should be left alone with an animal.",
    ],
  },
  {
    id: "fostering",
    title: "In the foster home",
    paragraphs: [
      "Follow the written settling plan provided by your foster coordinator. Keep the animal separate from resident animals for the introduction period, secure all exits, and do not invite visitors during the first week. Report any bite, scratch, or illness immediately.",
    ],
  },
  {
    id: "reporting",
    title: "Reporting a welfare concern",
    paragraphs: [
      "Your safety comes first. Do not enter private property, restrain an injured animal, or intervene in a confrontation. Note the location, take a photograph from a safe distance if you can, and call the 24-hour desk on 0800 720 KIN for anything urgent.",
    ],
  },
  {
    id: "emergency",
    title: "In an emergency",
    paragraphs: [
      "For an animal in immediate danger, call 0800 720 KIN. If a person has been bitten or seriously scratched, seek medical attention first, then notify the sanctuary so we can support the follow-up. If you witness deliberate cruelty, report it to the police and to our welfare desk.",
    ],
  },
];

export default function SafetyPage() {
  return (
    <LegalPage
      eyebrow="Trust & transparency"
      title="Safety, for everyone."
      intro="Animals are individuals with boundaries. These guidelines protect visitors, volunteers, foster carers, and the animals themselves. They are not optional."
      updated="1 October 2026"
      sections={sections}
    />
  );
}

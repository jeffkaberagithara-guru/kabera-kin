import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Kabera Kin collects, uses, and protects personal information submitted through adoption enquiries, welfare reports, and donations.",
};

const sections = [
  {
    id: "what-we-collect",
    title: "What we collect",
    paragraphs: [
      "We collect only the information needed to respond to you and to assess an adoption, foster, volunteer, or welfare enquiry. This may include your name, contact details, household composition, home type, and the content of your message.",
    ],
    list: [
      "Contact details you submit through a form, email, or phone call",
      "Information about your household relevant to animal placement",
      "Welfare report details, including location and description",
      "Donation records required for receipting and statutory audit",
    ],
  },
  {
    id: "how-we-use-it",
    title: "How we use it",
    paragraphs: [
      "Your information is used to reply to your enquiry, assess suitability for placement, arrange a home visit, provide follow-up support, and meet our legal and audit obligations. We do not sell personal information, and we do not add you to a mailing list without your explicit consent.",
    ],
  },
  {
    id: "who-sees-it",
    title: "Who sees it",
    paragraphs: [
      "Access is limited to the staff and volunteers who need it to perform their role. Adoption applications may be reviewed by a placement officer, a behaviourist, and — where relevant — a partner veterinarian. Welfare reports may be shared with a partner clinic or the relevant county authority where necessary to protect an animal.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "Adoption and foster records are kept for the lifetime of the placement, plus seven years, so that we can honour our return promise and provide post-placement support. General enquiries are deleted after twenty-four months unless you ask us to retain them. Financial records are retained as required by Kenyan law.",
    ],
  },
  {
    id: "your-rights",
    title: "Your rights",
    paragraphs: [
      "You may request a copy of the information we hold about you, ask us to correct it, or ask us to delete it where we are not legally required to retain it. Write to hello@kaberakin.org with the subject line 'Privacy request'. We will respond within thirty days.",
    ],
  },
  {
    id: "security",
    title: "Security and contact",
    paragraphs: [
      "We use access controls, encrypted storage, and a documented retention schedule. No system is perfect. If you believe your information has been mishandled, contact the trust secretary immediately at hello@kaberakin.org or on 0800 720 KIN.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Trust & transparency"
      title="Privacy, plainly stated."
      intro="This policy explains what we collect, why we need it, and how you can ask us to correct or delete it. It applies to this website, our forms, and our placement records."
      updated="1 October 2026"
      sections={sections}
    />
  );
}

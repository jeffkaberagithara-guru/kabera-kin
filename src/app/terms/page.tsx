import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "The terms governing use of the Kabera Kin website, adoption registry, and enquiry forms.",
};

const sections = [
  {
    id: "website",
    title: "Use of this website",
    paragraphs: [
      "This website is provided by Kabera Kin Sanctuary Trust for information, adoption enquiries, welfare reporting, and charitable giving. You may use it for lawful purposes only. You may not attempt to disrupt the site, scrape personal data, or misrepresent your identity in an enquiry.",
    ],
  },
  {
    id: "registry",
    title: "The adoption registry",
    paragraphs: [
      "Every profile is published in good faith and verified by a welfare officer at the time of publication. Medical and behavioural information may change. A profile is an invitation to a conversation, not an offer of placement. Kabera Kin reserves the right to decline any application.",
    ],
  },
  {
    id: "no-fee",
    title: "No adoption fee",
    paragraphs: [
      "Kabera Kin does not charge a fee for adoption and does not sell animals. Adopters are responsible for routine costs after placement, including food, routine veterinary care, and any insurance they choose. We never make placement conditional on a donation.",
    ],
  },
  {
    id: "enquiries",
    title: "Enquiries and reports",
    paragraphs: [
      "Submitting an enquiry does not create a contract or guarantee a response beyond our stated service levels. Welfare reports are triaged by urgency. The website form is not monitored continuously; for an animal in immediate danger, call the 24-hour desk on 0800 720 KIN.",
    ],
  },
  {
    id: "donations",
    title: "Donations",
    paragraphs: [
      "Gifts are received by Kabera Kin Sanctuary Trust and applied to the sanctuary's charitable objects. Restricted gifts to the medical fund are ring-fenced and reported in the annual audited allocation. Donations are non-refundable except in the case of an administrative error; contact us within fourteen days.",
    ],
  },
  {
    id: "liability",
    title: "Liability and governing law",
    paragraphs: [
      "We take reasonable care to keep information accurate, but the website is provided without warranties of any kind. To the extent permitted by law, Kabera Kin is not liable for indirect or consequential loss arising from use of the site. These terms are governed by the laws of Kenya.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Trust & transparency"
      title="Terms, without the fog."
      intro="These terms govern the website, the adoption registry, and the enquiries you send us. They are written to be read, not to hide behind."
      updated="1 October 2026"
      sections={sections}
    />
  );
}

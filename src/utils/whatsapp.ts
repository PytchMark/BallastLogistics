export type QuotePayload = {
  phoneE164: string;
  source: string;
  useCase: string;
  containerType?: string;
  location: string;
  timeline: string;
  builderStatus: string;
  budgetRange?: string;
  name?: string;
};

export function buildWhatsAppLink({
  phoneE164,
  source,
  useCase,
  containerType,
  location,
  timeline,
  builderStatus,
  budgetRange,
  name,
}: QuotePayload) {
  const intro = containerType
    ? `Hi Ballast, I'm looking for current pricing for a ${containerType} container.`
    : "Hi Ballast, I'm looking for current pricing for shipping containers.";

  const message = [
    intro,
    `Use case: ${useCase}.`,
    `Source: ${source}.`,
    `Location: ${location}. Timeline: ${timeline}.`,
    `Builder/designer: ${builderStatus}.`,
    `Budget: ${budgetRange || 'Just pricing'}.`,
    name ? `Name: ${name}.` : undefined,
    'Can you share current rates, delivery options, and whether financing is available? Thanks.',
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
}

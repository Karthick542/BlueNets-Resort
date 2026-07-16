// Central configuration file for resort contact details and booking messages.
// If the phone number or WhatsApp changes in the future, modify it here to update all instances.

export const RESORT_CONTACT = {
  // Official WhatsApp number formatted with country code (91) and no spaces/symbols
  whatsappNumber: '918848249652',
  phoneDisplay: '+91 88482 49652',
  email: 'reservations@bluenestmunnar.com',
};

// General enquiry template when clicking 'Enquiry Now'
// Using Unicode escapes for emojis to guarantee proper UTF-8 compiling on all platforms
const generalEnquiryTemplate = `Hello,

I hope you are doing well.

I am interested in staying at your resort in Munnar. Kindly assist me with the room availability and suitable stay options.

Please find my travel details below:

\u{1F464} Guest Name:
\u{1F4C5} Check-in Date:
\u{1F4C5} Check-out Date:
\u{1F465} Number of Guests:
\u{1F6CF}\u{FE0F} Preferred Room / Cottage:
\u{1F381} Preferred Stay Package:
\u{1F389} Purpose of Visit:
\u{1F37D}\u{FE0F} Meal Preference:
\u{1F697} Pickup Service Required (Yes / No):
\u{1F4AC} Any Special Requests:

Kindly share the available rooms, package details, and the best rates for my selected dates.

Thank you. I look forward to your response.`;

/**
 * Returns the fully formatted WhatsApp Click-to-Chat URL for general enquiries.
 */
export const getWhatsAppLink = () => {
  return `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(generalEnquiryTemplate)}`;
};

/**
 * Returns the fully formatted WhatsApp Click-to-Chat URL for a specific package request.
 */
export const getPackageWhatsAppLink = (packageName) => {
  const packageTemplate = `Hello,

I hope you are doing well.

I am interested in staying at your resort in Munnar. Kindly assist me with the room availability and suitable stay options.

Please find my travel details below:

\u{1F464} Guest Name:
\u{1F4C5} Check-in Date:
\u{1F4C5} Check-out Date:
\u{1F465} Number of Guests:
\u{1F6CF}\u{FE0F} Preferred Room / Cottage:
\u{1F381} Preferred Stay Package: ${packageName}
\u{1F389} Purpose of Visit:
\u{1F37D}\u{FE0F} Meal Preference:
\u{1F697} Pickup Service Required (Yes / No):
\u{1F4AC} Any Special Requests:

Kindly share the available rooms, package details, and the best rates for my selected dates.

Thank you. I look forward to your response.`;

  return `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(packageTemplate)}`;
};

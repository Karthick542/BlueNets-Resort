// Central configuration file for resort contact details and booking messages.
// If the phone number or WhatsApp changes in the future, modify it here to update all instances.

export const RESORT_CONTACT = {
  // Official WhatsApp number formatted with country code (91) and no spaces/symbols
  whatsappNumber: '918848249652',
  phoneDisplay: '+91 88482 49652',
  email: 'reservations@bluenestmunnar.com',
};

// General enquiry template when clicking 'Enquiry Now'
const generalEnquiryTemplate = `Hello,

I would like to enquire about your resort in Munnar.

Name: 
Check-in Date: 
Check-out Date: 
Number of Guests: 
Room Preference: 
Special Requests: 

Please share the room availability, package details, and pricing.

Thank you.`;

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

I would like to enquire about your package: "${packageName}" at your resort in Munnar.

Name: 
Check-in Date: 
Check-out Date: 
Number of Guests: 
Special Requests: 

Please share the package availability, inclusions, and pricing details.

Thank you.`;

  return `https://wa.me/${RESORT_CONTACT.whatsappNumber}?text=${encodeURIComponent(packageTemplate)}`;
};

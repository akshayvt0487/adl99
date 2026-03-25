// Hardcoded fallback form definitions for when the Gravity Forms REST API
// is blocked by CORS. These mirror the live forms on WordPress.
// Submissions still go to the REST API (POST with Content-Type is handled by CORS).

import type { GravityForm } from './gravity-forms';

const fallbackForms: Record<number, GravityForm> = {
  // Form 1: Service Contact Form
  1: {
    id: 1,
    title: 'Service contact form',
    description: '',
    button: { text: '' },
    confirmations: {
      '693ad3ec9c4ef': {
        type: 'message',
        message: 'Thanks for contacting us! We will get in touch with you shortly.',
      },
    },
    fields: [
      { id: 1, type: 'text', label: 'Your Name', isRequired: true, placeholder: 'John Smith', size: 'large' },
      { id: 3, type: 'email', label: 'Email Address', isRequired: true, placeholder: 'john@company.com.au', size: 'large' },
      { id: 4, type: 'text', label: 'Company Name', isRequired: false, placeholder: 'Your Company Pty Ltd', size: 'large' },
      { id: 5, type: 'phone', label: 'Phone Number', isRequired: false, placeholder: '04XX XXX XXX', size: 'large' },
      { id: 6, type: 'textarea', label: 'Tell us about your needs', isRequired: false, placeholder: 'What challenges are you facing?', size: 'small' },
      { id: 7, type: 'text', label: 'Service Name', isRequired: false, visibility: 'hidden' },
    ],
  },

  // Form 2: Main Contact Form
  2: {
    id: 2,
    title: 'Main Contact Form',
    description: '',
    button: { text: '' },
    confirmations: {
      '693ad51dcbb9c': {
        type: 'message',
        message: 'Thanks for contacting us! We will get in touch with you shortly.',
      },
    },
    fields: [
      { id: 1, type: 'text', label: 'First Name', isRequired: true, size: 'large' },
      { id: 3, type: 'text', label: 'Last Name', isRequired: true, size: 'large' },
      { id: 4, type: 'email', label: 'Email Address', isRequired: true, size: 'large' },
      { id: 5, type: 'phone', label: 'Phone Number', isRequired: false, size: 'large' },
      { id: 6, type: 'text', label: 'Company Name', isRequired: false, size: 'large' },
      {
        id: 7, type: 'select', label: 'Industry', isRequired: false, size: 'large',
        choices: [
          { text: 'Law Firm', value: 'Law Firm' },
          { text: 'Health Clinic', value: 'Health Clinic' },
          { text: 'Accounting', value: 'Accounting' },
          { text: 'Retail', value: 'Retail' },
          { text: 'Manufacturing', value: 'Manufacturing' },
          { text: 'Research', value: 'Research' },
          { text: 'Other', value: 'Other' },
        ],
      },
      { id: 8, type: 'textarea', label: 'Tell us about your security concerns', isRequired: false, size: 'small' },
      { id: 9, type: 'text', label: 'Source Page', isRequired: false, visibility: 'hidden' },
    ],
  },

  // Form 3: Emergency Incident Report Form
  3: {
    id: 3,
    title: 'Emergency Incident Report Form',
    description: 'Emergency form for reporting cyber security incidents requiring urgent response',
    button: { text: 'Submit Emergency Request' },
    confirmations: {
      emergency001: {
        type: 'message',
        message: 'Emergency Request Received. Our incident response team has been alerted and will contact you immediately.',
      },
    },
    fields: [
      { id: 1, type: 'text', label: 'Your Name', isRequired: true, placeholder: 'Your Name', size: 'large' },
      { id: 2, type: 'text', label: 'Company Name', isRequired: true, placeholder: 'Company Name', size: 'large' },
      { id: 3, type: 'phone', label: 'Phone Number', isRequired: true, placeholder: 'Phone Number', size: 'large' },
      { id: 4, type: 'email', label: 'Email Address', isRequired: true, placeholder: 'Email Address', size: 'large' },
      {
        id: 5, type: 'select', label: 'Incident Type', isRequired: true, placeholder: 'Select Incident Type', size: 'large',
        choices: [
          { text: 'Ransomware Attack', value: 'Ransomware Attack' },
          { text: 'Data Breach', value: 'Data Breach' },
          { text: 'Phishing/Social Engineering', value: 'Phishing/Social Engineering' },
          { text: 'Unauthorised Access', value: 'Unauthorised Access' },
          { text: 'Malware Infection', value: 'Malware Infection' },
          { text: 'DDoS Attack', value: 'DDoS Attack' },
          { text: 'Insider Threat', value: 'Insider Threat' },
          { text: 'Unknown/Other', value: 'Unknown/Other' },
        ],
      },
      { id: 6, type: 'text', label: 'When was it discovered?', isRequired: false, placeholder: 'e.g., Today at 2:30 PM, Yesterday morning', size: 'large' },
      { id: 7, type: 'text', label: 'Systems/Services Affected', isRequired: false, placeholder: 'e.g., email, file server, website', size: 'large' },
      { id: 8, type: 'textarea', label: 'Incident Description', isRequired: true, placeholder: 'Describe what happened - include any error messages, ransom notes, or unusual activity you\'ve observed', size: 'medium' },
    ],
  },
};

export function getFallbackForm(formId: number): GravityForm | null {
  return fallbackForms[formId] || null;
}

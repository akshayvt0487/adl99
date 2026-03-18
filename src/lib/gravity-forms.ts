// Gravity Forms REST API Integration — proxied through Next.js API route
// Documentation: https://docs.gravityforms.com/rest-api-v2/

import { getFallbackForm } from './gravity-forms-fallback';

const API_BASE_URL = typeof window !== 'undefined' ? '' : 'http://localhost:3000';
const GRAVITY_FORMS_API = `${API_BASE_URL}/api/gravity-forms`;

export interface GravityFormField {
  id: number;
  type: string;
  label: string;
  description?: string;
  isRequired: boolean;
  placeholder?: string;
  choices?: Array<{
    text: string;
    value: string;
    isSelected?: boolean;
  }>;
  inputs?: Array<{
    id: string;
    label: string;
    name?: string;
  }>;
  maxLength?: number;
  size?: string;
  cssClass?: string;
  visibility?: string;
  inputName?: string;
}

export interface GravityForm {
  id: number;
  title: string;
  description?: string;
  button: {
    text: string;
  };
  confirmations: Record<string, {
    message?: string;
    type: string;
  }>;
  fields: GravityFormField[];
}

export interface GravityFormEntry {
  [key: string]: string | number;
}

export interface GravityFormSubmissionResponse {
  is_valid: boolean;
  validation_messages?: Record<string, string>;
  confirmation_message?: string;
  confirmation_type?: string;
  page_number?: number;
  source_page_number?: number;
}

function toSubmissionPayload(entry: GravityFormEntry): Record<string, string | number> {
  const payload: Record<string, string | number> = {};
  for (const [rawKey, rawValue] of Object.entries(entry)) {
    if (rawValue === '' || rawValue === null || rawValue === undefined) continue;
    const key = String(rawKey);
    // Gravity Forms submissions endpoint expects "input_1", "input_3" format
    // Add "input_" prefix if not present, handle dots for sub-fields (e.g., "input_1_3")
    const normalized = key.startsWith('input_') ? key : `input_${key.replace(/\./g, '_')}`;
    payload[normalized] = rawValue as string | number;
  }
  return payload;
}

// Fetch form structure via Next.js API route
export async function fetchGravityForm(formId: number): Promise<GravityForm | null> {
  try {
    console.log(`[GravityForms] Fetching form ${formId} via API route`);

    const response = await fetch(`${GRAVITY_FORMS_API}/${formId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(`[GravityForms] Form fetch response status: ${response.status}`);

    if (!response.ok) {
      console.warn(`[GravityForms] API returned ${response.status}, using fallback`);
      return getFallbackForm(formId);
    }

    const form = await response.json();
    console.log('[GravityForms] Form loaded successfully:', form.title);
    return form;
  } catch (error) {
    console.warn('[GravityForms] API unreachable, using fallback form definition:', error);
    return getFallbackForm(formId);
  }
}

// Submit entry via proxy
export async function submitGravityFormEntry(
  formId: number,
  entry: GravityFormEntry
): Promise<{ success: boolean; message: string; validationErrors?: Record<string, string> }> {
  try {
    const payload = toSubmissionPayload(entry);
    console.log(`[GravityForms] Submitting to form ${formId} via API route:`, payload);

    const response = await fetch(`${GRAVITY_FORMS_API}/${formId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    console.log(`[GravityForms] Submission response status: ${response.status}`);

    const data = await response.json();
    console.log('[GravityForms] Response data:', data);

    // Check for validation errors from submissions endpoint
    if (data.is_valid === false) {
      console.warn('[GravityForms] Validation failed:', data.validation_messages);
      return {
        success: false,
        message: 'Please fix the errors and try again.',
        validationErrors: data.validation_messages,
      };
    }

    // Check for successful submission (submissions endpoint returns is_valid: true)
    if (data.is_valid === true || (response.ok && !data.code)) {
      console.log('[GravityForms] Form submitted successfully');
      return {
        success: true,
        message: data.confirmation_message || 'Thanks for contacting us! We will get in touch with you shortly.',
      };
    }

    // Check for API errors
    if (data.code || !response.ok) {
      console.error('[GravityForms] API error:', data);
      return {
        success: false,
        message: data.message || 'Failed to submit form. Please try again.',
      };
    }

    return {
      success: true,
      message: data.confirmation_message || 'Form submitted successfully',
    };
  } catch (error) {
    console.error('[GravityForms] Error submitting form:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}

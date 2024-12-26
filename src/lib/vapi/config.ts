import { VapiConfig } from './types';

// Get environment variables with fallbacks
const apiKey = import.meta.env.VITE_VAPI_API_KEY || 'demo';
const assistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID || 'demo';

export const vapiConfig: VapiConfig = {
  apiKey,
  assistantId,
  demo: true, // Always use demo mode for safety
  shareKey: import.meta.env.VITE_VAPI_SHARE_KEY || ''
};
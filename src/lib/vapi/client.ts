import { VapiClient } from '@vapi-ai/web';
import { vapiConfig } from './config';
import { VapiError } from './errors';

let vapiClient: VapiClient | null = null;

export function initializeVapiClient(): VapiClient {
  if (!vapiClient) {
    try {
      // Always use demo mode for safety
      vapiClient = new VapiClient({
        apiKey: vapiConfig.apiKey || 'demo',
        assistantId: vapiConfig.assistantId || 'demo',
        demo: true,
        options: {
          language: 'en-US',
          voice: 'nova',
          endCallOnSilence: true,
          silenceTimeoutSeconds: 5
        }
      });

      // Add error handler
      vapiClient.on('error', (error) => {
        console.error('VAPI client error:', error);
        vapiClient = null; // Reset client on error
      });

      return vapiClient;
    } catch (error) {
      console.error('VAPI initialization error:', error);
      throw new VapiError('Failed to initialize VAPI client');
    }
  }
  return vapiClient;
}

export function getVapiClient(): VapiClient {
  return initializeVapiClient();
}
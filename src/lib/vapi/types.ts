export interface VapiConfig {
  apiKey: string;
  assistantId: string;
  demo?: boolean;
  shareKey?: string;
}

export interface CallOptions {
  phoneNumber: string;
  context?: Record<string, any>;
}

export interface CallStatus {
  id: string;
  status: 'connecting' | 'in-progress' | 'completed' | 'failed';
  duration?: number;
  error?: string;
}
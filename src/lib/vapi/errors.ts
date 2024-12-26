export class VapiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'VapiError';
  }
}

export class VapiConnectionError extends VapiError {
  constructor(message = 'Failed to connect to Vapi service') {
    super(message);
    this.name = 'VapiConnectionError';
  }
}

export class VapiConfigError extends VapiError {
  constructor(message = 'Invalid Vapi configuration') {
    super(message);
    this.name = 'VapiConfigError';
  }
}
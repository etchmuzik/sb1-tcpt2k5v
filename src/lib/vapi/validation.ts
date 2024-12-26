export const validatePhoneNumber = (number: string): boolean => {
  return /^\+[1-9]\d{10,14}$/.test(number);
};

export const validateConfig = (apiKey: string, assistantId: string): void => {
  if (!apiKey) {
    throw new Error('API key is required');
  }
  if (!assistantId) {
    throw new Error('Assistant ID is required');
  }
};
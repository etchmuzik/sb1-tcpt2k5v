import { create } from 'zustand';

interface CallState {
  isCallActive: boolean;
  number: string;
  error: string | null;
  startCall: (number: string) => void;
  endCall: () => void;
  setNumber: (number: string) => void;
  clearError: () => void;
}

export const useCallStore = create<CallState>((set) => ({
  isCallActive: false,
  number: '',
  error: null,
  
  startCall: (number: string) => {
    window.location.href = '/contact';
  },
  
  endCall: () => {
    set({ isCallActive: false });
  },
  
  setNumber: (number: string) => set({ number }),
  clearError: () => set({ error: null })
}));
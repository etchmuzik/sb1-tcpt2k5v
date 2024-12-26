import { create } from 'zustand';

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: Date;
}

interface ChatStore {
  messages: Message[];
  addMessage: (text: string, sender: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  addMessage: (text, sender) => {
    const message = {
      id: Math.random().toString(36).substring(7),
      text,
      sender,
      timestamp: new Date(),
    };
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },
}));
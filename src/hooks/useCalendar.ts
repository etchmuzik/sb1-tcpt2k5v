import { create } from 'zustand';

interface Meeting {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  description?: string;
}

interface CalendarStore {
  meetings: Meeting[];
  addMeeting: (meeting: Omit<Meeting, 'id'>) => void;
  removeMeeting: (id: string) => void;
}

export const useCalendarStore = create<CalendarStore>((set) => ({
  meetings: [],
  addMeeting: (meeting) => {
    const id = Math.random().toString(36).substring(7);
    set((state) => ({
      meetings: [...state.meetings, { ...meeting, id }],
    }));
  },
  removeMeeting: (id) =>
    set((state) => ({
      meetings: state.meetings.filter((meeting) => meeting.id !== id),
    })),
}));
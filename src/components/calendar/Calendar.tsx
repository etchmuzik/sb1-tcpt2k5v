import React from 'react';
import { Calendar as CalendarIcon, Clock, X } from 'lucide-react';
import { useCalendarStore } from '../../hooks/useCalendar';

export default function Calendar() {
  const { meetings, removeMeeting } = useCalendarStore();
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-6">
        <CalendarIcon className="h-5 w-5 text-zinc-500" />
        <h2 className="text-xl font-semibold dark:text-white">Calendar</h2>
      </div>
      
      <div className="space-y-4">
        {meetings.map((meeting) => (
          <div 
            key={meeting.id}
            className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg"
          >
            <div>
              <h3 className="font-medium dark:text-white">{meeting.title}</h3>
              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Clock className="h-4 w-4" />
                <span>
                  {meeting.startTime.toLocaleTimeString()} - {meeting.endTime.toLocaleTimeString()}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeMeeting(meeting.id)}
              className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
            >
              <X className="h-4 w-4 text-zinc-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
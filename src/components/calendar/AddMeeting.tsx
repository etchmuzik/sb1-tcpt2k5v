import React, { useState } from 'react';
import { useCalendarStore } from '../../hooks/useCalendar';
import { useNotificationStore } from '../../hooks/useNotification';

export default function AddMeeting() {
  const [title, setTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  
  const { addMeeting } = useCalendarStore();
  const { addNotification } = useNotificationStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addMeeting({
      title,
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    });
    
    addNotification('Meeting scheduled successfully!', 'success');
    setTitle('');
    setStartTime('');
    setEndTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium dark:text-white mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium dark:text-white mb-1">
            Start Time
          </label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full p-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium dark:text-white mb-1">
            End Time
          </label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full p-2 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
            required
          />
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Schedule Meeting
      </button>
    </form>
  );
}
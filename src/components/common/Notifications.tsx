import React from 'react';
import { X } from 'lucide-react';
import { useNotificationStore } from '../../hooks/useNotification';

export default function Notifications() {
  const { notifications, removeNotification } = useNotificationStore();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg shadow-lg flex items-center justify-between
            ${notification.type === 'success' ? 'bg-green-500' :
              notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'} 
            text-white`}
        >
          <span>{notification.message}</span>
          <button
            onClick={() => removeNotification(notification.id)}
            className="ml-4 hover:opacity-75"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
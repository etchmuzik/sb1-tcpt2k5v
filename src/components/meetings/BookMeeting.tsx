import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../common/Button';

interface BookMeetingProps {
  className?: string;
}

export function BookMeeting({ className = '' }: BookMeetingProps) {
  const handleBooking = () => {
    window.open('https://calendly.com/beyondtech-eg/30min', '_blank');
  };

  return (
    <Button
      variant="outline"
      icon={Calendar}
      onClick={handleBooking}
      className={className}
    >
      Book a Meeting
    </Button>
  );
}
import React from 'react';
import { Phone, PhoneOff } from 'lucide-react';
import Button from '../common/Button';
import { useCallStore } from '../../store/callStore';

export default function CallButton() {
  const { isCallActive, startCall, endCall } = useCallStore();
  
  const handleClick = () => {
    if (isCallActive) {
      endCall();
    } else {
      startCall('+971581232600');
    }
  };
  
  return (
    <Button
      variant={isCallActive ? "secondary" : "minimal"}
      className="w-full"
      icon={isCallActive ? PhoneOff : Phone}
      onClick={handleClick}
    >
      {isCallActive ? 'End Call' : 'Call'}
    </Button>
  );
}
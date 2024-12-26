import React from 'react';
import { useCallStore } from '../../store/callStore';
import DialpadButton from './DialpadButton';
import CallButton from './CallButton';
import Button from '../common/Button';

export default function Dialpad() {
  const { number, setNumber } = useCallStore();

  const handleNumberClick = (digit: string) => {
    setNumber(number + digit);
  };

  const handleDelete = () => {
    setNumber(number.slice(0, -1));
  };

  return (
    <div className="bg-black border border-zinc-800 rounded-lg p-6 w-full max-w-xs">
      <div className="mb-6">
        <input
          type="text"
          value={number}
          readOnly
          className="w-full bg-zinc-900 text-white text-2xl p-3 rounded-lg text-center"
          placeholder="Enter number"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[...'123456789'].map((digit) => (
          <DialpadButton key={digit} onClick={() => handleNumberClick(digit)}>
            {digit}
          </DialpadButton>
        ))}
        <DialpadButton onClick={() => handleNumberClick('*')}>*</DialpadButton>
        <DialpadButton onClick={() => handleNumberClick('0')}>0</DialpadButton>
        <DialpadButton onClick={() => handleNumberClick('#')}>#</DialpadButton>
      </div>

      <div className="flex gap-2">
        <Button 
          variant="secondary" 
          className="flex-1"
          onClick={handleDelete}
        >
          Delete
        </Button>
        <CallButton />
      </div>
    </div>
  );
}
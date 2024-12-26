import React, { useState } from 'react';
import { Delete } from 'lucide-react';
import DialButton from './DialButton';
import DialDisplay from './DialDisplay';
import CountrySelect from './CountrySelect';
import CallHandler from './CallHandler';
import { useCountrySelect } from '../../hooks/useCountrySelect';

const dialButtons = [
  { digit: '1', letters: '' },
  { digit: '2', letters: 'abc' },
  { digit: '3', letters: 'def' },
  { digit: '4', letters: 'ghi' },
  { digit: '5', letters: 'jkl' },
  { digit: '6', letters: 'mno' },
  { digit: '7', letters: 'pqrs' },
  { digit: '8', letters: 'tuv' },
  { digit: '9', letters: 'wxyz' },
  { digit: '*', letters: '' },
  { digit: '0', letters: '+' },
  { digit: '#', letters: '' },
];

export default function RetroDialpad() {
  const [number, setNumber] = useState('');
  const { selectedCountry } = useCountrySelect();

  const handleDigit = (digit: string) => {
    setNumber(prev => prev + digit);
  };

  const handleDelete = () => {
    setNumber(prev => prev.slice(0, -1));
  };

  const getFullNumber = () => {
    return number.startsWith('+') ? number : `${selectedCountry.dialCode}${number}`;
  };

  return (
    <div className="max-w-xs mx-auto p-8 bg-black rounded-2xl border border-white/10">
      <div className="mb-6">
        <CountrySelect />
      </div>

      <DialDisplay 
        number={getFullNumber()} 
        className="mb-6" 
      />

      <div className="grid grid-cols-3 gap-3 mb-6">
        {dialButtons.map((button) => (
          <DialButton
            key={button.digit}
            digit={button.digit}
            letters={button.letters}
            onClick={handleDigit}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleDelete}
          className="flex items-center justify-center p-4 rounded-lg
            bg-black border border-white/10 hover:bg-white hover:text-black
            transition-colors duration-200"
        >
          <Delete className="w-6 h-6" />
        </button>
        <CallHandler 
          phoneNumber={getFullNumber()}
          onCallStart={() => console.log('Call started')}
          onCallEnd={() => console.log('Call ended')}
        />
      </div>
    </div>
  );
}
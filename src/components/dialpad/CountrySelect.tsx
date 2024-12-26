import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useCountrySelect } from '../../hooks/useCountrySelect';

export default function CountrySelect() {
  const { selectedCountry, countries, handleCountryChange } = useCountrySelect();

  return (
    <div className="relative">
      <select
        value={selectedCountry.code}
        onChange={(e) => handleCountryChange(e.target.value)}
        className="w-full appearance-none bg-black text-white px-4 py-2 pr-10 rounded-lg 
          border border-white/10 focus:outline-none focus:border-white/20
          transition-colors duration-200"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.name} ({country.dialCode})
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50" />
    </div>
  );
}
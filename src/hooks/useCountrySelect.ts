import { useState } from 'react';
import { countries } from '../utils/countries';

export function useCountrySelect() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (code: string) => {
    const country = countries.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return {
    selectedCountry,
    countries,
    handleCountryChange,
  };
}
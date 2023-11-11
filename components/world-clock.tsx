"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  
interface City {
  label: string;
  value: string;
}

export function WorldClock(): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<string>('Europe/Paris');
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCity(event.target.value);
  };

  const formattedTime = time.toLocaleTimeString('fr-FR', { timeZone: selectedCity });

  // Liste de quelques villes avec leur fuseau horaire
  const cities: City[] = [
    { label: 'New York', value: 'America/New_York' },
    { label: 'Tokyo', value: 'Asia/Tokyo' },
    { label: 'London', value: 'Europe/London' },
    // Ajoutez d'autres villes selon vos besoins
  ];

  return (
    <div className="p-4 m-4 max-w-md w-full border border-gray-300 rounded-md">
      <h2>World Clock</h2>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue>{selectedCity}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time Zones</SelectLabel>
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value} onClick={() => setSelectedCity(city.value)}>
              {city.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
      <p className="text-4xl font-bold mt-4">{formattedTime}</p>
    </Select>
      <p className="text-4xl font-bold mt-4">{formattedTime}</p>
    </div>
  );
}

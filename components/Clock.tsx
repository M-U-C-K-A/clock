"use client"
import React, { useState, useEffect } from 'react';

export function Clock() {
  // Remplacez 'Europe/Paris' par le nom de votre fuseau horaire (ex: 'America/New_York')
  const referenceCityTimezone = 'Europe/Paris';

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString('fr-FR', { timeZone: referenceCityTimezone });

  return (
    <div className="p-4 m-4 max-w-md w-full border border-gray-300 rounded-md">
        <h2>{referenceCityTimezone}</h2>
      <p className="text-4xl font-bold">{formattedTime}</p>
    </div>
  );
}

'use client';

import React from 'react';
import { useHeroStats } from '../../hooks/useHeroStats';

const HeroStats: React.FC = () => {
  const { data, isLoading, isError, error } = useHeroStats();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Hero Win-Loss Stats</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HeroStats;

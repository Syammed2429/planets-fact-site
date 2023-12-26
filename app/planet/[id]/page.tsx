import { PlanetsContainer } from '@/container/planets-container/planets-container';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface PlanetsPageInterfaceProps {
  params: ParsedUrlQuery;
}

const PlanetsPage = ({ params }: PlanetsPageInterfaceProps) => {
  const planetName = params?.id ?? 'mercury';
  return (
    <div>
      <PlanetsContainer planetName={planetName as string} />
    </div>
  );
};

export default PlanetsPage;

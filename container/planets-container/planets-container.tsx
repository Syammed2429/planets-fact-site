'use client';

import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';
import { FC } from 'react';

interface PlanetsContainerProps {
  planetName: string;
}

export const PlanetsContainer: FC<PlanetsContainerProps> = ({ planetName }) => {
  const selectedPlanet = planetsData?.filter(
    (planet) => planet?.name.toLowerCase() === planetName
  );
  console.log('selectedPlanet:', selectedPlanet);
  return (
    <div>
      {planetName}
      {selectedPlanet?.map((planet) => (
        <div key={planet?.name}>
          <Image
            src={planet?.images?.planet}
            width={150}
            height={150}
            alt={planet?.name}
          />
        </div>
      ))}
    </div>
  );
};

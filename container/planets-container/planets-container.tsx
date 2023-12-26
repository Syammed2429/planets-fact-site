'use client';

import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';
import { FC } from 'react';
import { PlanetWeatherCard } from '@/components/card/planet-weather-card';

interface PlanetsContainerProps {
  planetName: string;
}

export const PlanetsContainer: FC<PlanetsContainerProps> = ({ planetName }) => {
  const selectedPlanet = planetsData?.find(
    (planet) => planet?.name.toLowerCase() === planetName
  );
  console.log('selectedPlanet:', selectedPlanet);
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className=' flex flex-col md:flex-row justify-around items-center md:items-start my-8'>
        <div className='w-[18rem] h-[18rem] '>
          <Image
            src={selectedPlanet?.images?.planet as string}
            width={200}
            height={200}
            objectFit='cover'
            priority={true}
            alt={selectedPlanet?.name as string}
          />
        </div>
        <div className='max-w-[21rem] text-center md:text-left justify-end'>
          <div>{selectedPlanet?.name}</div>
          <div>{selectedPlanet?.overview.content}</div>
          <div>
            Source:{' '}
            <a
              href={selectedPlanet?.overview.source}
              target='_blank'
              rel='noopener noreferrer'
            >
              {selectedPlanet?.overview.source}
            </a>
          </div>
        </div>
      </div>
      <div className='flex  flex-wrap justify-center mt-8 items-start gap-10'>
        <PlanetWeatherCard
          title='Rotation Time'
          description={selectedPlanet?.rotation as string}
        />
        <PlanetWeatherCard
          title='Revolution Time'
          description={selectedPlanet?.revolution as string}
        />
        <PlanetWeatherCard
          title='Radius'
          description={selectedPlanet?.radius as string}
        />
        <PlanetWeatherCard
          title='Average Temp'
          description={selectedPlanet?.temperature as string}
        />
      </div>
    </div>
  );
};

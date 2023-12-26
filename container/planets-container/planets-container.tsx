'use client';

import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';
import { FC, useState } from 'react';
import { PlanetWeatherCard } from '@/components/card/planet-weather-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PlanetsContainerProps {
  planetName: string;
}

export const PlanetsContainer: FC<PlanetsContainerProps> = ({ planetName }) => {
  // states
  const [isInternal, setIsInternal] = useState<string>('planet');
  const [geology, setGeology] = useState<string>('');
  const selectedPlanet: any = planetsData?.find(
    (planet) => planet?.name.toLowerCase() === planetName
  );

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className=' flex flex-col md:flex-row justify-around items-center md:items-start my-8'>
        <div className='w-[19rem] h-[19rem] '>
          <Image
            src={selectedPlanet?.images?.[isInternal]}
            width={200}
            height={200}
            // objectFit='cover'
            priority={true}
            alt={selectedPlanet?.name as string}
          />
          {geology && (
            <Image
              src={selectedPlanet?.images?.[geology]}
              width={100}
              height={100}
              // objectFit='cover'
              priority={true}
              className='relative bottom-12 left-6 flex justify-center w-[10rem] h-[10rem] '
              alt={selectedPlanet?.name as string}
            />
          )}
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
          <Tabs defaultValue='account' className='w-[400px]'>
            <TabsList className='flex flex-col    h-[200px] bg-transparent'>
              <TabsTrigger
                value='account'
                className='w-[10rem]'
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('');
                }}
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                value='password'
                onClick={() => {
                  setIsInternal('internal');
                  setGeology('');
                }}
              >
                Internal
              </TabsTrigger>
              <TabsTrigger
                value='password1'
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('geology');
                }}
              >
                Password1
              </TabsTrigger>
            </TabsList>
          </Tabs>
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

'use client';

import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';
import { FC, useState } from 'react';
import { PlanetWeatherCard } from '@/components/card/planet-weather-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import sourceIcon from '@/public/assets/icon-source.svg';
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

  const planetColors = {
    mercury: 'mercury',
    venus: 'venus',
    earth: 'earth-color',
    mars: 'mars',
    jupiter: 'jupiter',
    saturn: 'saturn',
    uranus: 'uranus',
    neptune: 'neptune',
  };

  const activeColorClass =
    planetColors[planetName as keyof typeof planetColors]; // default color: ;
  console.log('planetName:', planetName);
  console.log('activeColorClass:', activeColorClass);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[8rem]'>
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
          <div className='flex flex-col gap-10'>
            <div className='text-7xl uppercase'>{selectedPlanet?.name}</div>
            <div className='text-md font-league-spartan break-words font-normal'>
              {selectedPlanet?.overview.content}
            </div>
            <div className='flex gap-2 w-full text-lg font-league-spartan break-words font-normal '>
              Source:{' '}
              <Link
                href={selectedPlanet?.overview.source}
                target='_blank'
                className='flex gap-2 items-baseline font-bold opacity-60 leading-6 underline'
              >
                Wikipedia
                <Image
                  src={sourceIcon}
                  alt={'sourceIcon'}
                  width={15}
                  className='w-[0.75rem] h-[0.75rem] items'
                />
              </Link>
            </div>
          </div>

          <Tabs defaultValue='overview' className='w-[400px]'>
            <TabsList className='flex flex-col h-[200px] bg-transparent '>
              <TabsTrigger
                value='overview'
                className={`w-[10rem] data-[state=active]:bg-${activeColorClass} `}
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('');
                }}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value='interval'
                onClick={() => {
                  setIsInternal('internal');
                  setGeology('');
                }}
              >
                Internal Structure
              </TabsTrigger>
              <TabsTrigger
                value='geology'
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('geology');
                }}
              >
                Surface Geology
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

'use client';

import { planetsData } from '@/utils/JsonData';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { PlanetWeatherCard } from '@/components/card/planet-weather-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import sourceIcon from '@/public/assets/icon-source.svg';
import { cn } from '@/lib/utils';
import { useColorStore } from '@/utils/store/store-management';
interface PlanetsContainerProps {
  planetName: string;
}

export const PlanetsContainer: FC<PlanetsContainerProps> = ({ planetName }) => {
  // states
  const [isInternal, setIsInternal] = useState<string>('planet');
  const [geology, setGeology] = useState<string>('');
  // store
  const [_themeColor, updateThemeColor] = useColorStore(
    (state: { themeColor: any; updateThemeColor: any }) => [
      state.themeColor,
      state.updateThemeColor,
    ]
  );

  const selectedPlanet: any = planetsData?.find(
    (planet) => planet?.name.toLowerCase() === planetName
  );

  useEffect(() => {
    const planetColors = {
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6f2ed6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1ec2a4',
      neptune: '#2D68F0',
    };
    const activeColorClass =
      planetColors[planetName as keyof typeof planetColors];
    if (activeColorClass) {
      updateThemeColor(activeColorClass);
    }
  }, [planetName, updateThemeColor]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  md:pt-[5rem] xl:pt-[7rem]'>
      <div className=' flex flex-col  md:flex-col xl:flex-row  justify-center md:justify-around items-center md:items-start my-8'>
        <Tabs
          defaultValue='overview'
          className='flex justify-between md:hidden w-full -mt-5 -mb-20'
        >
          <TabsList className='flex items-start gap-2 h-[200px] bg-transparent  '>
            <TabsTrigger
              value='overview'
              className='w-[8rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5 '
              onClick={() => {
                setIsInternal('planet');
                setGeology('');
              }}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              className='w-[8rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5
                '
              value='interval'
              onClick={() => {
                setIsInternal('internal');
                setGeology('');
              }}
            >
              Structure
            </TabsTrigger>
            <TabsTrigger
              className='w-[8rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5'
              value='geology'
              onClick={() => {
                setIsInternal('planet');
                setGeology('geology');
              }}
            >
              Surface
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div
          className='flex flex-col  md:w-[47rem]  pt-2 justify-center items-center md:justify-center md:items-center xl:justify-start xl:items-start
         md:mb-14 xl:mb-0'
        >
          <Image
            src={selectedPlanet?.images?.[isInternal]}
            width={200}
            height={200}
            className=' md:w-[20rem] md:h-[20rem] '
            priority={true}
            alt={selectedPlanet?.name as string}
          />
          {geology && (
            <Image
              src={selectedPlanet?.images?.[geology]}
              width={100}
              height={100}
              priority={true}
              className='relative  bottom-[3rem] md:bottom-[5rem]  md:left-[5rem] flex justify-center md:w-[10rem] md:h-[12rem] '
              alt={selectedPlanet?.name as string}
            />
          )}
        </div>
        <div className='max-w-[21rem] mt-8 md:mt-0 md:max-w-full xl:max-w-[21rem] 2xl:max-w-[21rem]  md:flex md:justify-around md:items-center gap-10 md:gap-20 xl:gap-0 xl:block text-center md:text-left xl:justify-end'>
          <div className='flex flex-col gap-5  md:gap-10 md:max-w-[450px] '>
            <div className='text-5xl md:text-8xl uppercase '>
              {selectedPlanet?.name}
            </div>
            <div className=' text-md font-league-spartan break-words font-normal'>
              {selectedPlanet?.overview.content}
            </div>
            <div className='flex items-center justify-center md:justify-normal gap-2 w-full text-lg font-league-spartan  font-normal text-center'>
              Source :{' '}
              <Link
                href={selectedPlanet?.overview.source}
                target='_blank'
                className='flex gap-2 items-baseline font-bold opacity-60 leading-6 underline tracking-widest	'
              >
                Wikipedia
                <Image
                  src={sourceIcon}
                  alt={'sourceIcon'}
                  width={15}
                  className='w-[0.75rem] h-[0.75rem]'
                />
              </Link>
            </div>
          </div>

          <Tabs defaultValue='overview' className='hidden md:block md:w-full'>
            <TabsList className='flex flex-col items-start gap-4 h-[200px] bg-transparent  '>
              <TabsTrigger
                value='overview'
                className='w-[21rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5 '
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('');
                }}
              >
                <span className='opacity-50 px-2'>01 </span>Overview
              </TabsTrigger>
              <TabsTrigger
                className='w-[21rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5
                '
                value='interval'
                onClick={() => {
                  setIsInternal('internal');
                  setGeology('');
                }}
              >
                <span className='opacity-50 px-2'>02 </span> Internal Structure
              </TabsTrigger>
              <TabsTrigger
                className='w-[21rem] h-[3rem] uppercase font-league-spartan text-white font-bold leading-6 tracking-[0.16rem] justify-start px-5'
                value='geology'
                onClick={() => {
                  setIsInternal('planet');
                  setGeology('geology');
                }}
              >
                <span className='opacity-50 px-2'>03</span> Surface Geology
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className='flex  flex-wrap  xl:justify-center mt-8 items-start gap-4 xl:gap-10 mb-8 '>
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

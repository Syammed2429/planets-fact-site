import React, { FC } from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface PlanetWeatherCardProps {
  title: string;
  description: string;
}

export const PlanetWeatherCard: FC<PlanetWeatherCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card className='w-[16rem]  flex-shrink-0 bg-dark-color-custom text-white border-[1px] border-opacity-20 rounded-none'>
      <CardHeader>
        <CardDescription className='font-league-spartan font-bold text-xs leading-6 uppercase'>
          {title}
        </CardDescription>
        <CardTitle className='text-2xl uppercase'>{description}</CardTitle>
      </CardHeader>
    </Card>
  );
};

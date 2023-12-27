import { planetsNames } from '@/utils/JsonData';
import Link from 'next/link';
import React from 'react';

const HeaderComponent = () => {
  return (
    <>
      <div className='flex items-center p-8 '>
        <div className='flex-1 text-3xl'>THE PLANETS</div>
        <div className='flex gap-8 uppercase font-league-spartan tracking-[0.25rem] font-bold text-xs'>
          {planetsNames?.map((planet) => (
            <div key={planet?.name}>
              <Link href={`/planet/${planet?.name.toLowerCase()}`}>
                {planet?.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-white w-full h-[1px] opacity-20'></div>
    </>
  );
};

export default HeaderComponent;

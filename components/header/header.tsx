import { planetsNames } from '@/utils/JsonData';
import React from 'react';

const HeaderComponent = () => {
  return (
    <>
      <div className='flex items-center py-5 px-5'>
        <div className='flex-1 text-3xl'>THE PLANETS</div>
        <div className='flex gap-8 uppercase font-league-spartan tracking-[0.0625rem] font-bold text-xs'>
          {planetsNames?.map((planet) => (
            <div key={planet?.name}>{planet?.name}</div>
          ))}
        </div>
      </div>
      <div className='bg-white w-full h-[1px] opacity-20'></div>
    </>
  );
};

export default HeaderComponent;

import React from 'react';
import { planetsNames } from '@/utils/JsonData';
import Link from 'next/link';
import Image from 'next/image';
import hamBurgerIcon from '@/public/assets/icon-hamburger.svg';

const HeaderComponent = () => {
  return (
    <>
      <div className='hidden md:flex flex-col md:justify-center xl:flex-row items-center p-8 '>
        <div className='xl:flex-1 md:mb-10 xl:mb-0 text-3xl'>THE PLANETS</div>
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
      <div className='flex items-center  justify-between p-5  md:hidden'>
        <div className='xl:flex-1 md:mb-10 xl:mb-0 text-3xl'>THE PLANETS</div>
        <div className='xl:flex-1 md:mb-10 xl:mb-0 text-3xl'>
          <Image src={hamBurgerIcon} alt='hamBurgerIcon' />
        </div>
      </div>
      <div className='bg-white w-full h-[1px] opacity-20'></div>
    </>
  );
};

export default HeaderComponent;

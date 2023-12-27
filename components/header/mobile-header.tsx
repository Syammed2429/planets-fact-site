'use client';

import React from 'react';
import Image from 'next/image';
import hamBurgerIcon from '@/public/assets/icon-hamburger.svg';
import { ChevronRight } from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { planetsNames } from '@/utils/JsonData';
import Link from 'next/link';

export const MobileHeader = () => {
  return (
    <div className='flex items-center  justify-between p-5  md:hidden'>
      <div className='xl:flex-1 md:mb-10 xl:mb-0 text-3xl'>THE PLANETS</div>
      <div className='xl:flex-1 md:mb-10 xl:mb-0 text-3xl'>
        <div className=''>
          <Sheet>
            <SheetTrigger asChild>
              <Image src={hamBurgerIcon} alt='hamBurgerIcon' />
            </SheetTrigger>
            <SheetContent side={'left'} className='w-full bg-dark-color-custom'>
              <SheetHeader>
                <SheetTitle>
                  <div className='text-white text-left md:mb-10 xl:mb-0 text-3xl'>
                    THE PLANETS
                  </div>
                  <div className='bg-white max-w-full h-[1px]  mt-5 opacity-20'></div>
                </SheetTitle>
              </SheetHeader>
              <div className='grid gap-4 py-4'>
                {planetsNames?.map((planet) => (
                  <div
                    key={planet?.name}
                    className=' uppercase font-league-spartan  font-bold'
                  >
                    <Link href={`/planet/${planet?.name.toLowerCase()}`}>
                      <SheetClose asChild>
                        <div className='flex items-center justify-between  gap-4 my-6'>
                          <Image
                            src={planet?.color}
                            alt={planet?.name}
                            width={20}
                            height={20}
                          />
                          <div className='flex items-center flex-1 tracking-[0.25rem] mt-1'>
                            {planet?.name}
                          </div>
                          <ChevronRight className='opacity-40' />
                        </div>
                      </SheetClose>
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

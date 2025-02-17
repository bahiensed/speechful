'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { LeftSideBarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const LeftSideBar = () => {
  const pathname = usePathname();
  const router = useRouter

  return (
    <section className='left_sidebar'>
      <nav className='flex flex-col gap-6'>
        <Link className='flex cursor-pointer items-center gap-3 pb-10 max-lg:justify-center' href={'/'}>
          <Image alt='logo' src='/icons/logo.svg' width={23} height={27}/>
          <h1 className='text-20 font-extrabold text-white max-lg:hidden'>Speechful Club</h1>
        </Link>

        {LeftSideBarLinks.map(({ imgURL, route, label }) => {
          //pathname = route or route/subroute
          const isActive = pathname === route || pathname.startsWith(`${route}/`);

          return (
            <Link
              className={
                cn(
                  'flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start',
                  {
                    'bg-nav-focus border-r-4 border-orange-1': isActive
                  }
                )
              }
              href={route}
              key={label}>
          
              <Image alt={label} src={imgURL} width={24} height={24}/>
              <p>{label}</p>
          
            </Link>
          )
        })}
      </nav>
    </section>
  )
}

export default LeftSideBar
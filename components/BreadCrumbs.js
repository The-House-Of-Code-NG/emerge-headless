'use client'

import Link from 'next/link';
import { useRouter } from 'next/router';



import HouseIcon from '../assets/blog/house.svg'
import ChevIcon from '../assets/blog/chev.svg'
import Image from 'next/image';



const TailwindBreadcrumbs = () => {
  const pathname = useRouter().pathname;
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <div className="flex mb-[1.81rem] items-center">
      
      <div className='mr-4'>
      <Image src={HouseIcon}  />
      </div>
      {segments.map((segment, index) => (
       
          <>
           <div className='mr-4'>
            <Image src={ChevIcon} className='mr-4' />
        </div>
              <Link
              href={`/${segments.slice(0, index + 1).join("/")}`}
              aria-label={`Go to ${segment}`}
              className={`capitalize text-sm text-[#242424] leading-[14px] mr-4 ${index === segments.length - 1 ? 'text-[#6941C6]' : 'text-[#242424]'}`}
            >
              {segment}
            </Link>
            </>
        ))}
    </div>
      
  );
};

export default TailwindBreadcrumbs;
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BackspaceIcon,
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightingBoltIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"



function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg> */}
          <HeaderItem title="HOME" Icon={HomeIcon}/>
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon}/>
          <HeaderItem title="VERIFIED" Icon={BackspaceIcon}/>
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon}/>
          <HeaderItem title="ACCOUNT" Icon={UserIcon}/>
      </div>
      <Image 
        className='object-contains' src="https://brandslogos.com/wp-content/uploads/images/hulu-logo-black-and-white.png" 
        width={90} 
        height={36} 
        alt=""
      />
    </header>
  )
}

export default Header
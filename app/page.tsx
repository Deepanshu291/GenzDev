"use client"

import Image from 'next/image'
import { Client, Databases } from 'appwrite';
import Search from './Component/Search';
import { Intropost } from './Component/Intropost';
import { Blogs } from './Component/Blogs';
import { useEffect } from 'react';
import { GetServerSideProps, GetStaticProps } from 'next';





export default function Home() {

  
  return (
   <>
   
   <Search/>
   <div className="p-[10px] ">
  
   {/* <Intropost/> */}
   <Blogs/>
     </div>
   </>
  )
}


import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { blogpost, blogprops } from '../utils/types'
import { useBlog } from '../context/BlogContext'
import Link from 'next/link'

export const Intropost = () => {
  const url:string ="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80"
  const {blogs} = useBlog()  
    const intropost = blogs[blogs.length-1]
  
  
  return (
   <>
   <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-6 cursor-pointer  mt-10 px-10 md:px-15 ">
        
        <Image src={intropost?.imgurl} className='rounded-lg h-full object-fill w-full shadow-lg shadow-slate-900 dark:shadow-slate-700' width={"1000"} height={"1000"}  alt='blogs' />
        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
    <div className="grid grid-flow-row gap-5">
        <h5 className='text-purple-500 font-bold text-lg'>
            {intropost?.category}
        </h5>
        <a href="#">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{intropost?.title}</h1>
        </a>
        <p className="line-clamp-5 text-xl mb-3 font-normal text-gray-700 dark:text-gray-400"> {intropost?.metadata} </p>
        <Link  href={`/blog/${intropost?.slug}`} className="inline-flex w-32 h-12 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
        </div>
   </>
  )
}

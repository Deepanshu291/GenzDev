import Image from 'next/image'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { blogpost } from '@/app/utils/types'
import Link from 'next/link'

function Blogcard({post}:{post?:blogpost}) {
    const date =  post?.date
    
  return (
    <div className="max-w-md  lg:max-w-sm  2xl:max-w-xs  my-10 lg:my-3  rounded-xl shadow-2xl flex flex-col justify-around">
      <Image className='rounded-t-lg '  width={"500"} height={"100"} src={post!.imgurl} alt='' />
       
      <div className="p-5">
        <Text  color={post?.colorscheame} fontWeight={'bold'}>{post?.category} </Text>
        <h6 className='text-purple-500 font-bold'> </h6>
      
          <h5 className="line-clamp-none lg:line-clamp-1  2xl:line-clamp-2  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post?.title}</h5>
          <p className='text-gray-800 dark:text-gray-300 font-bold my-1  text-xs'>{post?.date?.toLocaleString()}</p>
      <p className="line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400">{post?.metadata}</p>
      <Link href={`/blog/${post?.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
           <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
      </Link>
      </div>
      </div>
  )
}

export default Blogcard
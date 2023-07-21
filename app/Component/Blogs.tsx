"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../public/banner.jpg'
import { Text } from '@chakra-ui/react'
import Blogcard from './Cards/Blogcard'
import { blogpost } from '../utils/types'
import { useBlog } from '../context/BlogContext'

export const Blogs = () => {

const {blogs} = useBlog()
    
return (
    <>
    <div className=" px-10 gap-6 flex flex-wrap justify-center lg:justify-start items-center ">
    
    {blogs?.map((post:blogpost)=>(
      <Blogcard key={post.id} post={post}/>
    ))}
    
        
        
        
    </div>
    

    </>
  )
}

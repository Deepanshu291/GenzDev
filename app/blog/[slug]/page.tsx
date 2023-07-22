"use client"
import { params } from '@/app/utils/types'
import { useRouter } from 'next/router'
import React, { Suspense, useEffect, useState } from 'react'
import { AspectRatio, Badge, Box, Center, CircularProgress, CircularProgressLabel, Container, HStack, Heading,Image,Text, VStack } from '@chakra-ui/react'
import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'
import { useBlog } from '@/app/context/BlogContext'



const Blogpage = ({params}:params) => {
    const [height, setHeight] = useState(0);
    const url = "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171793/angular_vs_react_1024x512_12233d6004.png"
    const markdownText = '# Hello, *world*!';
    
    const {blog,getPostbyslug} = useBlog()
    useEffect(() => {
        getdata()
      
    }, [])
    
    const getdata = async() =>{
    //    await getPostbyid(params.slug)
    await getPostbyslug(params.slug)
    //    await console.log(blogs[0]);
    }

    return (
        <>
        

        
         <div className='px-6 md:px-20 lg:px-56 mt-10'>
        <h3 className='text-red-500 text-sm lg:text-lg'>{blog?.category} </h3>
        <h3 className='text-3xl lg:text-5xl font-bold dark:text-white'>{blog?.title} </h3>
        <div className='flex items-center mt-5'>
           
            <div className='ml-2'>
                {/* <h3 className='font-bold text-[12px]'>Tubeguruji</h3> */}
                <h3 className='text-gray-500 dark:text-gray-300 text-[10px]'> {blog?.date?.toLocaleString()} </h3>
            </div>
        </div>
        <Image src={blog?.imgurl} rounded={'xl'} m={"5px 0"} />
        <ReactMarkdown  children={(blog?.content) || "Loading...."} className='markdown' />
        {/* <h3>{post.desc}</h3> */}
        {/* {blog.content ? (
          <ReactMarkdown  children={blog.content}  className='markdown' />  
        ):(
            <p>No Content availabe</p>
        )} */}
        
    </div>
        </>

    
  )
}

export default Blogpage
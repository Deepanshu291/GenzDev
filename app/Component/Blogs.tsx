"use client"
import Blogcard from './Cards/Blogcard'
import { blogpost } from '../utils/types'
import { useBlog } from '../context/BlogContext'
import { Intropost } from './Intropost'
import { useEffect } from 'react'

export const Blogs = () => {

const {blogs} = useBlog()
    
return (
    <>
    {/* {blogs.forEach(element => {
      element.intropost 
    })} */}
    <Intropost />
    
    <div className=" px-10 gap-6 flex flex-wrap justify-center lg:justify-start  ">
    
    {blogs?.map((post:blogpost)=>(
      <Blogcard key={post.id} post={post}/>
      // post.intropost?<Intropost key={post.id}  blog={post} /> :<Blogcard key={post.id} post={post}/>
    ))}
      
    </div>
    

    </>
  )
}

import { createContext, useContext, useEffect, useState } from "react";
import { BlogContext, blogpost,Props } from "../utils/types";
import { getpost, getpostbyid, getpostbyslug } from "../Services/Api_provider";


export const Blogcontext = createContext<BlogContext | null>(null);

export const BlogProvider = ({children}:Props)=>{
    const [blogs, setBlogs] = useState<blogpost[]>([])
    const [blog, setBlog] = useState<blogpost>()
    const [latestblog, setLatest] = useState<blogpost>()
    useEffect(() => {
      getPost()
    }, [])
    

    const getPost = async()=>{
        const posts:blogpost[] = await getpost()
        setBlogs(posts)
    }


    const getPostbyslug = async(slug:string)=>{
        const posts:blogpost[] = await getpostbyslug(slug)
        console.log(...posts);
        
        setBlog(posts[0])
    }

    const getPostbyid = async(id:string)=>{
        const posts:blogpost[] = await getpostbyid(id)
        console.log(...posts);
        setBlog(posts[0])
    }

    const context ={
        blog,
        blogs,
        latestblog,
        getPost,
        getPostbyid,
        getPostbyslug
    }

    return (
        <Blogcontext.Provider value={context} >
            {children}
        </Blogcontext.Provider>
    );
}

export function useBlog() {
    const blogcontextvalue = useContext(Blogcontext);
    if (!blogcontextvalue) {
        throw new Error("useBlog used outside of provider")
    }
    return blogcontextvalue
}
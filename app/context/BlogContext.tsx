import { createContext, useContext, useEffect, useState } from "react";
import { BlogContext, blogpost,Props } from "../utils/types";
import { getpost } from "../Services/Api_provider";


export const Blogcontext = createContext<BlogContext | null>(null);

export const BlogProvider = ({children}:Props)=>{
    const [blogs, setBlogs] = useState<blogpost[]>([])

    useEffect(() => {
      getPost()
    }, [])
    

    const getPost = async()=>{
        const posts:blogpost[] = await getpost()
        setBlogs(posts)
    }
    const context ={
        blogs,
        getPost
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
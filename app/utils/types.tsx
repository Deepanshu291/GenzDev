import { type } from "os";
import { ReactNode } from "react";
import { Url } from "url";



export interface blogpost {
    id:string,
    title:string,
    slug:string,
    content:string | undefined,
    imgurl:string,
    category: string,
    colorscheame:string,
    metadata:any,
    intropost:boolean,
    date: Date | undefined,
} 

export type blogprops={
    blog:blogpost
}

export interface BlogContext{
    blog:blogpost | undefined,
    blogs:blogpost[],
    latestblog:blogpost | undefined,
    getPost:()=>Promise<void>,
    getPostbyid:(id:string)=>Promise<void>,
    getPostbyslug: (slug:string)=>Promise<void>
}

export type Props = {
    children:ReactNode
}


export type params={
    params:slug
}

interface slug{
    slug:string
}
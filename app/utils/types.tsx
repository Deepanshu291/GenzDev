import { type } from "os";
import { ReactNode } from "react";
import { Url } from "url";



export interface blogpost {
    id:string,
    title:string,
    slug:string,
    content:string,
    imgurl:string,
    category: string,
    colorcheame:string,
    metadata:string,
    date: Date,
} 

export interface BlogContext{
    blogs:blogpost[],
    getPost:()=>Promise<void>,
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
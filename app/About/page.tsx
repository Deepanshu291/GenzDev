"use client"
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import banner from '../../public/banner.jpg'
import { Center } from "@chakra-ui/react";

export default function About() {
  const markdown = `
  # Hello there! Welcome to my GenzDev blog.

  ## My name is Deepanshu Sharma, and I'm a passionate web developer and technology enthusiast. I've been working in the web development industry for [number of years] and have had the opportunity to work on various exciting projects.
  
  # About Me

   ![Profile Picture]("https://avatars.githubusercontent.com/u/73581139?v=4") 

   Hi there! I'm [Your Name], a passionate web developer and tech enthusiast.

I started my journey in the world of web development several years ago, and I've been hooked ever since. Throughout my career, I've had the opportunity to work on a variety of exciting projects and technologies, which has helped me grow and refine my skills.

This blog is my way of sharing my knowledge and experiences in web development with the community. I believe in the power of the web to create meaningful and interactive experiences, and I'm constantly exploring new tools and techniques to stay at the forefront of this fast-paced industry.

Whether you're a fellow developer looking to expand your skills, a beginner eager to learn the ropes, or just someone curious about the ever-evolving world of web development, this blog is for you! I'll be covering a wide range of topics, including front-end and back-end development, web design, best practices, and the latest trends in the industry.

I hope you find my blog helpful and insightful. Feel free to leave comments, share your thoughts, and connect with me on social media. Let's embark on this web development journey together!

  `
  return (
    <>
    <Center>
    <Image  src={banner} alt=""/>
    </Center>
    <ReactMarkdown className="markdown" children={markdown} />
    </>
  );
}

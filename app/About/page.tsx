"use client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import {  Container } from "@chakra-ui/react";

export default function About() {
  const markdown = `
 
  # About Me: 👩‍💻

  ![Profile Picture](https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966)

  ##  Hello there! Welcome to my GenzDev blog.
Welcome to my web development blog, where I invite you to join me on an exciting journey through the ever-evolving landscape of web technologies. I'm Deepanshu Sharma, and I am truly passionate about everything web development! 🚀

## The Spark that Ignited My Passion ✨

Several years ago, I stumbled upon the world of web development almost by accident. Little did I know that this serendipitous encounter would ignite a spark that would fuel my career and creativity for years to come. From my first "Hello World" script to building complex web applications, each step of the journey has been exhilarating. 💡

## Embracing the Art and Science of Web Development 🎨🔬

For me, web development is an exquisite blend of art and science. It's not just about lines of code; it's about crafting digital experiences that captivate users and leave a lasting impression. Every project I work on becomes an opportunity to explore new ideas, experiment with cutting-edge technologies, and push the boundaries of what's possible on the web. 🌐

## Learning, Growing, and Embracing Challenges 📚🌱

The web development field is a dynamic universe, where innovation happens at breakneck speed. To stay relevant, I believe in continuously learning and challenging myself. Through countless hours of coding, attending tech conferences, and participating in online communities, I keep my skills sharp and my passion alive. 🚀

## Building Real-World Solutions 🏢💼

In my career, I've had the privilege of collaborating with diverse teams and clients to build real-world solutions. From e-commerce platforms that revolutionize online shopping to web applications that streamline business processes, I find immense satisfaction in knowing that my work impacts people's lives. 💼

## Why I Started This Blog ❓📝

Creating this blog is my way of giving back to the vibrant web development community that has nurtured my growth. I want to share my knowledge, insights, and experiences with fellow developers, aspiring enthusiasts, and anyone curious about the possibilities of the web. 🌐

## What to Expect 🤔💡

On this blog, I'll be your guide to exploring the latest front-end and back-end development techniques. Together, we'll delve into the art of web design and learn how to create beautiful user interfaces. We'll uncover best practices, discuss optimization tricks, and uncover the secrets of building lightning-fast websites.

But it's not just about the technical aspects. We'll also dive into the philosophy of web development—the impact of design choices, the significance of accessibility, and the role of empathy in creating inclusive digital experiences. 🎨💻

## Join Me on This Adventure! 🤝🌟

I invite you to hit the subscribe button and become a part of this vibrant community of web developers. Let's share our knowledge, celebrate our successes, and tackle challenges together. Whether you're just starting or a seasoned pro, I promise you'll find something valuable here.

Feel free to connect with me on social media, leave comments, and share your own experiences. Let's inspire each other and shape the future of web development together.

Thank you for being here. Let's embark on this incredible journey, fueled by curiosity, creativity, and the boundless possibilities of the web! 🚀🌐

  `;
  return (
    <>
      {/* <Center>
    <Image  src={banner} alt=""/>
    </Center> */}
      <Container px={32} maxW={"100vw"}>
        <ReactMarkdown className="markdown" children={markdown} />
      </Container>
    </>
  );
}

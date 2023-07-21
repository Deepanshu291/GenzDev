
"use client"
import { Image } from "@chakra-ui/next-js";
import banner from "../../public/banner2.webp";
import { Box, Input, InputGroup, InputLeftElement, VStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import Image from "next/image";
export default function Search() {
  const url:string = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
  return (
    <>
      {/* <VStack justify='center' className="flex justify-center"> */}
    {/* <Image src={""} alt="banner"/> */}
    <div className="flex flex-col justify-center my-8">
    <Image src={banner}  alt="" shadow={"dark-lg"} rounded='2xl' />
      <Box margin={"-20px"}>

      
      <div className="bg-slate-100  gap-2 shadow-2xl sha shadow-slate-600 px-3 py-2 rounded-lg  mx-[23%] flex items-center">
        <SearchIcon/>
        <Input size='lg' width='xl' height='10'  variant='filled'  placeholder="search"/>
      </div></Box>

      <Box>
        
      </Box>
    {/* </VStack> */}
    </div>
    </>
  )
}

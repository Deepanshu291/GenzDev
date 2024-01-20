"use client"
import Image from "next/image";
import logo from "../../public/logo.png"
import Link from "next/link";
import { Button, ButtonGroup, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay,  Heading, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ChatIcon, HamburgerIcon, MoonIcon, Search2Icon, SunIcon } from "@chakra-ui/icons";
export default function Navbar() {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.remove("dark");
      }else{
        document.documentElement.classList.add("dark");
      }
    }, )

    const handletheme = () =>{
        setTheme(theme === "dark" ? "" :"dark")
    }

    const {isOpen,onClose,onOpen} = useDisclosure()
    
  return (
    <>
    <div className="grid grid-cols-2 gap-10  md:grid-flow-col  px-2 py-2  xl:py-5 mx-auto  justify-between  items-center">
        {/* <Image src={logo} alt={"logo"} height={100}  /> */}
        <Link href={"/"}> <Heading  color={theme === "dark"?"black":"white"}>GenzDev</Heading> </Link>
        <ul className="hidden md:flex gap-4  text-xl">
            <li  className='hover:font-bold text-black cursor-pointer '>
                <Link href={"/home"}>Home</Link>
            </li>
            <li  className='hover:font-bold cursor-pointer'>
                <Link href={"/about"}>About</Link>
            </li>
            <li  className='hover:font-bold cursor-pointer'>
                <Link href={"/contact"}>Contact</Link>
            </li>
        </ul>

        {/* <Button colorScheme="blackAlpha" className="bg-black rounded-2xl  lg:rounded-3xl xl:w-36" size={"lg"}>Login</Button> */}
        {/* <Button colorScheme=""  size={"lg"} color={theme ==="dark"?"black":"white"} onClick={handletheme}>{theme ==="dark"?<MoonIcon boxSize={7} values="Light Mode"/>  :<SunIcon boxSize={7}/>} </Button> */}
        <Button position={"absolute"} right={"5"}  colorScheme="" width={"-webkit-fit-content"} visibility={{ base:"visible", md:"hidden"}}  color={theme ==="dark"?"black":"white"} onClick={onOpen}><HamburgerIcon boxSize={10}/></Button>
         <Button colorScheme="" visibility={{ base:"hidden", md:"visible"}}  size={"lg"} color={theme ==="dark"?"black":"white"} onClick={handletheme}>{theme ==="dark"?<div className="flex items-center gap-3"><MoonIcon boxSize={7} values="Light Mode"/> Dark Mode</div>  :<div className="flex items-center gap-3"><SunIcon boxSize={7}/> Light Mode</div>} </Button>
       
    </div>

    <Drawer isOpen={isOpen} onClose={onClose} >
      <DrawerOverlay/>
      <DrawerContent height={"md"} background={theme ==="dark"?"whiteAlpha.900":"blackAlpha.900"} >
        <DrawerCloseButton size={"lg"} color={theme === "dark"?"black":"white"}/>
        <DrawerHeader borderBottomWidth={"thick"} borderColor={"black"}>
        <Heading color={theme ==="dark"?"dark":"white"}>GenzDev</Heading>
        </DrawerHeader>
        <DrawerBody >
        <ul className="grid  gap-6  text-xl">
            <li  className='hover:font-bold text-black cursor-pointer '>
                <Link href={"/"}>Home</Link>
            </li>
            <li  className='hover:font-bold cursor-pointer'>
                <Link href={"/about"}>About</Link>
            </li>
            <li  className='hover:font-bold cursor-pointer'>
                <Link href={"/contact"}>Contact</Link>
            </li>
        </ul>

        </DrawerBody>
        <DrawerFooter>
        <Button colorScheme=""  size={"lg"} color={theme ==="dark"?"black":"white"} onClick={handletheme}>{theme ==="dark"?<div className="flex items-center gap-3"><MoonIcon boxSize={7} values="Light Mode"/> Light Mode</div>  :<div className="flex items-center gap-3"><SunIcon boxSize={7}/> Dark Mode</div>} </Button>

          {/* <HStack alignItems={"center"} gap={"10px"}>
              <ChatIcon boxSize={"10"}/>
            <Search2Icon boxSize={"10"}/>
          </HStack> */}
         
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </>
  )
}

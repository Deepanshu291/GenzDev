"use client"

import { Center, CircularProgress, Progress } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Center>
        {/* <Progress size='lg' isIndeterminate /> */}
       <CircularProgress isIndeterminate color={"green.300"} /> 
    </Center>
   
  )
}

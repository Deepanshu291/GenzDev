"use client"
import { params } from '@/app/utils/types'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AspectRatio, Badge, Box, Center, CircularProgress, CircularProgressLabel, Container, HStack, Heading,Image,Text, VStack } from '@chakra-ui/react'
import { CheckIcon, MinusIcon } from '@chakra-ui/icons'
import ReactMarkdown from 'react-markdown'



const Blogpage = ({params}:params) => {
    const [height, setHeight] = useState(0);
    const url = "https://res.cloudinary.com/dknvsbuyy/image/upload/v1684171793/angular_vs_react_1024x512_12233d6004.png"
    const markdownText = '# Hello, *world*!';
    
    return (
        <>
         <div className='px-6 md:px-20 lg:px-56 mt-10'>
        <h3 className='text-red-500 text-sm lg:text-lg'>Lorem </h3>
        <h3 className='text-3xl lg:text-5xl font-bold dark:text-white'>Lorem ipsum dolor sit amet.</h3>
        <div className='flex items-center mt-5'>
           
            <div className='ml-2'>
                {/* <h3 className='font-bold text-[12px]'>Tubeguruji</h3> */}
                <h3 className='text-gray-500 dark:text-gray-300 text-[10px]'>24 Sept 2024</h3>
            </div>
        </div>
        <Image src={url} rounded={'xl'} m={"5px 0"} />
        {/* <h3>{post.desc}</h3> */}
        <ReactMarkdown  children={markdownText}  className='markdown' />
    </div>
        </>

    // <Container color={'white'} maxW={"container.md"} style={{width: "100vw"}}>
    //     <VStack>
    //         <Box id={'head-content'}>
    //             <HStack 
    //             alignSelf={'flex-start'}
    //             textTransform={'uppercase'}
    //             mt={7}
    //             mb={5}
    //             fontSize={'sm'}
    //             >
    //              <Box>
    //                 Last updated: {' '}
    //                 </Box>  
    //                 <Center>
    //                     <MinusIcon boxSize={1}/>
    //                 </Center> 

    //                 <Box textTransform={'uppercase'}>5 Min Read</Box>
    //             </HStack>
             
    //             <Image 
    //             src={url}
    //             alt='blogpost'
    //             htmlWidth='100%'
    //             height={'auto'}
    //             rounded={'2xl'}
    //             />
             
                

              
    //         </Box>
    //     </VStack>
       
    //     {/* <Badge m={"1"} borderRadius={'2xl'} p={'5px 10px'} colorScheme={'blue'}>
    //         React
    //     </Badge>
    //     <Heading color={'white'} m={"5px 0"}>
    //         Blog Post Title
    //     </Heading>
    //     <Text>Published on July 19, 2023</Text>

    //     <Container>
            
    //     </Container> */}
    //     {/* <Box maxW='2xl' borderWidth='1px' borderRadius={'lg'} overflow={'hidden'} > */}
    //         {/* <Image m={"10px 0"} src={url} rounded={'xl'} ></Image>
    //         <Text>
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sit officiis beatae repellendus odio, quia odit sed laboriosam modi neque, accusamus quas cumque fugiat ab optio voluptatem ipsum doloremque, corrupti ducimus dicta eius eos asperiores excepturi. Ipsa libero id consectetur. Obcaecati quod, doloremque vel dolore incidunt enim labore est facilis quo minima. Aliquid cum voluptatem est molestias itaque vero, quas quibusdam nostrum impedit sunt laboriosam ipsa. Facere eius non consequatur sunt, quisquam dicta explicabo! Vero, et cum. Vitae quisquam tempora quod mollitia autem exercitationem cumque quidem, non laudantium officia consequuntur voluptatem! Labore, ullam molestias tenetur fugiat illo harum quasi nam a minima culpa sit veritatis eligendi, ut odit, necessitatibus optio aperiam quisquam sapiente voluptatibus. Vero, molestiae nostrum praesentium placeat impedit maxime laboriosam consectetur cumque aperiam!
    //          </Text> */}
    // </Container>

    
//    
  )
}

export default Blogpage
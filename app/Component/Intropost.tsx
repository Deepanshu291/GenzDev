import React from 'react'
import Image from 'next/image'

export const Intropost = () => {
  const url:string ="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80"
 
  return (
   <>
   <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-6 cursor-pointer  mt-10 px-10 md:px-15 ">
        
        <Image className='rounded-lg h-full object-fill w-full shadow-lg shadow-slate-900 dark:shadow-slate-100' width={"1000"} height={"1000"} src={url} alt='blogs' />
        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
    <div className="grid grid-flow-row gap-5">
        <h5 className='text-purple-500 font-bold text-lg'>
            React
        </h5>
        <a href="#">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h1>
        </a>
        <p className="line-clamp-5 text-xl mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum dolorum et beatae sequi voluptatem atque? Vero, eius corrupti consequatur nostrum sit ut eos dolorem, aperiam architecto ipsum quas debitis? Magnam, fugiat, omnis alias nihil ea provident perferendis rerum praesentium quasi porro natus eveniet officiis est dolores, totam blanditiis saepe eum molestias? Voluptates reprehenderit dicta suscipit corrupti? Aspernatur accusantium temporibus totam consequuntur ad ut repellendus necessitatibus labore enim id debitis iure explicabo pariatur voluptas dicta rerum adipisci rem aliquid voluptates in ipsam, deleniti veniam. Deserunt adipisci ipsum dolorum excepturi sapiente voluptatem, repudiandae id, magnam aspernatur laborum incidunt nam laboriosam perferendis? Ullam doloribus dolore quo sit, minus est fuga earum, enim velit eius suscipit magnam dolores. Dolorum ipsa ullam alias illo enim explicabo, iure nobis aliquid unde temporibus ducimus minus? Provident nam soluta quod? Deserunt doloremque dolorem iusto similique sit fugiat est natus obcaecati. Fuga iusto sint itaque, amet eligendi quia deserunt aut? Magni sit perferendis fugiat sunt quisquam molestias id debitis delectus. Iste enim nobis quidem asperiores distinctio. Voluptates consequuntur neque facilis ad corrupti, esse id debitis veritatis atque qui, labore minima assumenda quas nesciunt, commodi unde necessitatibus nulla dolore! Rerum officiis accusantium autem natus, architecto voluptatibus harum fugiat et?</p>
        <a href="#" className="inline-flex w-32 h-12 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
        </div>
   </>
  )
}

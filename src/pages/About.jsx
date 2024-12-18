import React, { useRef, useState } from 'react'
import GlowingCard from '../components/mini-components/GlowingCard.jsx'

const About = () => {
   const content = [
      <>
         <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
            Collaborative Features
         </h2>
         <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut omnis
            exercitationem consequatur deserunt ratione fuga et, ullam suscipit
            voluptates optio nihil magnam vel quasi esse iusto mollitia? Nihil,
            at soluta?
         </p>
      </>,
      <>
         <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
            Live Video & Chat
         </h2>
         <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at
            libero, tempora voluptatum quo necessitatibus vitae quos ipsum
            expedita soluta, dolores reprehenderit. Enim quam beatae officia
            soluta delectus rem nisi.
         </p>
      </>,
      <>
         <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
            Admin & User DB
         </h2>
         <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi at
            libero, tempora voluptatum quo necessitatibus vitae quos ipsum
            expedita soluta, dolores reprehenderit. Enim quam beatae officia
            soluta delectus rem nisi.
         </p>
      </>,
   ]

   return (
      <div className="min-h-screen bg-[url('/darkbg.jpg')] bg-cover bg-center">
         <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-8'>
            {/* first wide card  */}
            <div class='bg-gray-50 dark:bg-transparent/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-6 mb-8'>
               <h1 class='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-3'>
                  The Interview Platform
               </h1>
               <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
               </p>
            </div>

            <div class='grid md:grid-cols-3 gap-8'>
               <GlowingCard content={content[0]} />
               <GlowingCard content={content[1]} />
               <GlowingCard content={content[2]} />
            </div>
         </div>
      </div>
   )
}
export default About

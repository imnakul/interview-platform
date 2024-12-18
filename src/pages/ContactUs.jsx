import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

export function ContactSection() {
   const [isLoggedIn, setIsLoggedIn] = useState(true)

   return (
      <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
         <Navbar isLoggedIn={isLoggedIn} />

         {/* outer content box  */}
         <div className='grid grid-cols-1 bg-white/20 rounded-lg p-2 my-7 mx-56'>
            <div className='min-w-screen flex gap-16 justify-center '>
               <div className='flex flex-col items-center justify-center'>
                  <Typography
                     variant='h1'
                     color='black'
                     className='text-3xl mb-5'
                  >
                     We&apos;re Here to Help
                  </Typography>
                  <Typography className=' font-normal !text-lg max-w-md !text-white text-center'>
                     Whether it&apos;s a question about our services, a request
                     for technical assistance, or suggestions for improvement,
                     our team is eager to hear from you.
                  </Typography>
                  <img
                     src='/contact.png'
                     alt='contactImage'
                     className='w-xl h-xl lg:w-[300px] lg:h-[300px] '
                  />
               </div>
               <form
                  action='#'
                  className='flex flex-col gap-4 lg:max-w-md bg-purple-400/20 rounded-md px-4 py-6 my-10 border-2 border-purple-300'
               >
                  {/* <Typography
                  variant='small'
                  className='text-left !font-semibold !text-black'
               >
                  Select Options
               </Typography>
               <div className='flex gap-4'>
                  <Button variant='outlined' className='max-w-fit'>
                     General inquiry
                  </Button>
                  <Button variant='outlined' className='max-w-fit'>
                     Product Support
                  </Button>
               </div> */}
                  <div className='grid grid-cols-2 gap-5'>
                     <div>
                        <Typography
                           variant='small'
                           className='mb-2 text-left font-medium !text-gray-900'
                        >
                           First Name
                        </Typography>
                        <Input
                           color='gray'
                           size='md'
                           placeholder='First Name'
                           name='first-name'
                           className='focus:border-gray-900 text-white'
                           containerProps={{
                              className: 'min-w-full',
                           }}
                           labelProps={{
                              className: 'hidden',
                           }}
                        />
                     </div>
                     <div>
                        <Typography
                           variant='small'
                           className='mb-2 text-left font-medium !text-gray-900'
                        >
                           Last Name
                        </Typography>
                        <Input
                           size='md'
                           placeholder='Last Name'
                           name='last-name'
                           className='focus:border-gray-900'
                           containerProps={{
                              className: '!min-w-full',
                           }}
                           labelProps={{
                              className: 'hidden',
                           }}
                        />
                     </div>
                  </div>
                  <div>
                     <Typography
                        variant='small'
                        className='mb-2 text-left font-medium !text-gray-900'
                     >
                        Your Email
                     </Typography>
                     <Input
                        color='gray'
                        size='md'
                        placeholder='name@email.com'
                        name='email'
                        className='focus:border-gray-900'
                        containerProps={{
                           className: '!min-w-full',
                        }}
                        labelProps={{
                           className: 'hidden',
                        }}
                     />
                  </div>
                  <div>
                     <Typography
                        variant='small'
                        className='mb-2 text-left font-medium !text-gray-900'
                     >
                        Your Message
                     </Typography>
                     <Textarea
                        rows={6}
                        color='gray'
                        placeholder='Message'
                        name='message'
                        className='focus:border-gray-900'
                        containerProps={{
                           className: '!min-w-full',
                        }}
                        labelProps={{
                           className: 'hidden',
                        }}
                     />
                  </div>
                  <Button className='w-full' color='gray'>
                     Send message
                  </Button>
               </form>
            </div>
         </div>

         <Footer />
      </div>
   )
}

export default ContactSection

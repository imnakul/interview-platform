import React from 'react'
import { Button, Input, Textarea, Typography } from '@material-tailwind/react'

export function ContactSection() {
   return (
      <section className='px-8 py-8 lg:py-4'>
         <div className='container mx-auto text-center bg-white/20 rounded-md p-4'>
            <Typography
               variant='h1'
               color='black'
               className='mb-4 !text-3xl lg:!text-4xl'
            >
               We&apos;re Here to Help
            </Typography>
            <Typography className='mb-10 font-normal !text-lg lg:mb-5 mx-auto max-w-3xl !text-white  '>
               Whether it&apos;s a question about our services, a request for
               technical assistance, or suggestions for improvement, our team is
               eager to hear from you.
            </Typography>
            {/* form  */}
            <div className='grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start'>
               <img
                  src='/contact.png'
                  alt='map'
                  className='w-sm h-sm md:max-h-[510px] md:max-w-[510px] ml-24'
               />
               <form
                  action='#'
                  className='flex flex-col gap-4 lg:max-w-md bg-purple-400/20 rounded-md p-2 border-2 border-purple-300'
               >
                  <Typography
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
                  </div>
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
      </section>
   )
}

export default ContactSection

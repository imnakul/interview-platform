import { Typography } from '@material-tailwind/react'

function Footer() {
   return (
      <footer className='w-full bg-white/80 py-2 px-4'>
         <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between'>
            <img src='/interview.png' alt='logo-ct' className='w-8 h-8' />
            <Typography color='black' className='text-center font-normal'>
               &copy; Nakul Srivastava
            </Typography>
            <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
               <li>
                  <Typography
                     as='a'
                     href='#'
                     color='blue-gray'
                     className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                  >
                     About Us
                  </Typography>
               </li>
               <li>
                  <Typography
                     as='a'
                     href='#'
                     color='blue-gray'
                     className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                  >
                     License
                  </Typography>
               </li>
               <li>
                  <Typography
                     as='a'
                     href='https://github.com/imnakul/interview-platform'
                     color='blue-gray'
                     className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                  >
                     Contribute
                  </Typography>
               </li>
               <li>
                  <Typography
                     as='a'
                     href='https://www.linkedin.com/in/nakul-srivastava-a8426033b/'
                     color='blue-gray'
                     className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
                  >
                     Contact Us
                  </Typography>
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer

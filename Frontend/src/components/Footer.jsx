import { Typography } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'

function Footer() {
   const navigate = useNavigate()
   return (
      <footer
         color='transparent'
         className='max-w-7xl mx-auto rounded-xl bg-white/50 py-2.5 px-5'
      >
         <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between'>
            {/* <img src='/interview.png' alt='logo-ct' className='w-8 h-8' /> */}
            <div className='flex justify-start gap-3'>
               <Typography color='black' className='text-center font-semibold'>
                  &copy; Nakul Srivastava
               </Typography>
               <Typography
                  as='a'
                  target='_blank'
                  href='https://www.linkedin.com/in/nakul-srivastava-a8426033b/'
                  color='blue-gray'
                  className='hover: scale-105 transition-all '
               >
                  <img
                     src='/social.png'
                     alt='logo-linkedIn'
                     className='w-7 h-7'
                  />
               </Typography>
            </div>
            <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
               <li>
                  <Link to='/about'>
                     <p className='font-normal transition-colors hover:text-cyan-50 focus:text-blue-800 hover:font-bold'>
                        About Us
                     </p>
                  </Link>
               </li>

               <li>
                  <Link
                     target='_blank'
                     to='https://github.com/imnakul/interview-platform'
                  >
                     <p className='font-normal transition-colors hover:text-cyan-50  focus:text-blue-800 hover:font-bold'>
                        Contribute
                     </p>
                  </Link>
               </li>
               <li>
                  <Link to='/contact'>
                     <p className='font-normal transition-colors hover:text-cyan-50 focus:text-blue-800 hover:font-bold'>
                        Contact Us
                     </p>
                  </Link>
               </li>
               <li></li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer

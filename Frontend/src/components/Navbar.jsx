import React from 'react'
import { Navbar, Collapse, Typography, Avatar } from '@material-tailwind/react'
import AvatarWithUserDropdown from './mini-components/Avatar'
import { Link } from 'react-router-dom'

function NavList() {
   return (
      <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2'>
         {/* <Typography
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-medium'
         >
            <a
               href='#'
               className='flex items-center hover:text-blue-500 transition-colors'
            >
               Pages
            </a>
         </Typography> */}
         <AvatarWithUserDropdown />
         <Typography variant='h6'>User Name</Typography>
      </ul>
   )
}

export function NavbarSimple({ isLoggedIn }) {
   const [openNav, setOpenNav] = React.useState(false)

   const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false)

   React.useEffect(() => {
      window.addEventListener('resize', handleWindowResize)

      return () => {
         window.removeEventListener('resize', handleWindowResize)
      }
   }, [])

   return (
      <Navbar
         color='transparent'
         className='mx-auto max-w-7xl px-4 py-1 bg-white/50'
      >
         {/* max-w-screen-xl is same as max-w-7xl  */}
         <div className='flex items-center justify-between text-blue-gray-900'>
            <div className='flex justify-start items-center gap-4'>
               {/* icon */}
               <img
                  src='/online-interview.gif'
                  alt=''
                  className='contain h-10 w-10 border-2 border-black rounded'
               />

               <Link to='/'>
                  <p className='cursor-pointer text-xl font-bold hover:opacity-70 '>
                     InterviewSPHERE
                  </p>
               </Link>
            </div>

            {/* Navitemslist  */}
            <div className='hidden lg:block'>{isLoggedIn && <NavList />}</div>
         </div>
         <Collapse open={openNav}>{isLoggedIn && <NavList />}</Collapse>
      </Navbar>
   )
}

export default NavbarSimple

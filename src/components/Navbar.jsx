import React from 'react'
import { Navbar, Collapse, Typography, Avatar } from '@material-tailwind/react'
import AvatarWithUserDropdown from './mini-components/Avatar'

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
      </ul>
   )
}

export function NavbarSimple() {
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
      <Navbar className='mx-auto max-w-screen-xl px-3 py-1 bg-white/50'>
         <div className='flex items-center justify-between text-blue-gray-900'>
            <div className='flex justify-start gap-3'>
               {/* icon */}
               <img
                  src='/online-interview.gif'
                  alt=''
                  className='contain h-10 w-10 border-2 border-black rounded'
               />
               {/* title  */}
               <Typography
                  as='a'
                  href='/'
                  variant='h5'
                  className='mr-1 cursor-pointer py-1.5'
               >
                  Interview-Platform
               </Typography>
            </div>
            {/* Navitemslist  */}
            <div className='hidden lg:block'>
               <NavList />
            </div>
         </div>
         <Collapse open={openNav}>
            <NavList />
         </Collapse>
      </Navbar>
   )
}

export default NavbarSimple

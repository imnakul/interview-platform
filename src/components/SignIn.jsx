import { useState } from 'react'

import { Typography, Input, Button, Radio } from '@material-tailwind/react'
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

function Icon() {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         fill='none'
         viewBox='0 0 24 24'
         stroke-width='1.5'
         stroke='currentColor'
         class='size-6'
      >
         <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
         />
      </svg>
   )
}

export function SignIn({ type }) {
   const [passwordShown, setPasswordShown] = useState(false)
   const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur)
   const navigate = useNavigate()

   return (
      <section className='grid text-center items-center max-w-[28rem] mx-auto mt-7 mb-6 bg-white/40 p-4 rounded-md'>
         <div>
            <Typography variant='h3' color='blue-gray' className='mb-2'>
               Sign In
            </Typography>
            <Typography className='mb-4 text-black font-normal text-[18px]'>
               Enter your email and password to sign in
            </Typography>

            <div className='flex justify-center gap-10 mb-2'>
               <Radio
                  name='type'
                  ripple={true}
                  icon={<Icon />}
                  className='border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0 '
                  label={
                     <Typography
                        color='white'
                        className='font-normal text-white'
                     >
                        Admin
                     </Typography>
                  }
               />
               <Radio
                  name='type'
                  defaultChecked
                  ripple={true}
                  icon={<Icon />}
                  className='border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0'
                  label={
                     <Typography
                        color='white'
                        className='font-normal text-white'
                     >
                        User
                     </Typography>
                  }
               />
            </div>

            <form action='#' className='mx-auto max-w-[24rem] text-left'>
               <div className='mb-6'>
                  <label htmlFor='email'>
                     <Typography
                        variant='small'
                        className='mb-2 block font-medium text-gray-900'
                     >
                        Your Email
                     </Typography>
                  </label>
                  <Input
                     id='email'
                     color='gray'
                     size='lg'
                     type='email'
                     name='email'
                     placeholder='name@mail.com'
                     className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
                     labelProps={{
                        className: 'hidden',
                     }}
                  />
               </div>
               <div className='mb-6'>
                  <label htmlFor='password'>
                     <Typography
                        variant='small'
                        className='mb-2 block font-medium text-gray-900'
                     >
                        Password
                     </Typography>
                  </label>
                  <Input
                     size='lg'
                     placeholder='********'
                     labelProps={{
                        className: 'hidden',
                     }}
                     className='w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200'
                     type={passwordShown ? 'text' : 'password'}
                     icon={
                        <i onClick={togglePasswordVisiblity}>
                           {passwordShown ? (
                              <EyeIcon className='h-5 w-5' />
                           ) : (
                              <EyeSlashIcon className='h-5 w-5' />
                           )}
                        </i>
                     }
                  />
               </div>
               <Button color='gray' size='lg' className='mt-6' fullWidth>
                  sign in
               </Button>
               <div className='!mt-5 flex justify-end'>
                  <Typography
                     as='a'
                     href='#'
                     color='blue-gray'
                     variant='small'
                     className='font-medium'
                  >
                     Forgot password
                  </Typography>
               </div>
               <Button
                  variant='outlined'
                  size='lg'
                  className='mt-5 flex h-12 items-center justify-center gap-2'
                  fullWidth
               >
                  <img
                     src={`https://www.material-tailwind.com/logos/logo-google.png`}
                     alt='google'
                     className='h-6 w-6'
                  />{' '}
                  sign in with google
               </Button>
               <Typography
                  variant='small'
                  color='black'
                  className='!mt-4 text-center font-normal'
               >
                  Not registered?{' '}
                  <a
                     onClick={() => {
                        navigate('/register')
                     }}
                     href='#'
                     className='font-bold text-green-300 hover:text-white'
                  >
                     Register yourself here!
                  </a>
               </Typography>
            </form>
         </div>
      </section>
   )
}

export default SignIn

import {
   Card,
   Input,
   Checkbox,
   Radio,
   Button,
   Typography,
} from '@material-tailwind/react'
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

function Register() {
   const navigate = useNavigate()
   return (
      <Card
         className='max-w-[28rem] mx-auto mt-7 mb-6 bg-white/20 p-4'
         shadow={false}
      >
         <Typography variant='h4' color='black'>
            Sign Up
         </Typography>
         <Typography color='cyan' className='mt-1 font-semibold'>
            Nice to meet you! Enter your details to register.
         </Typography>
         <form className='mt-4 mb-2 w-80 max-w-screen-lg sm:w-96'>
            <div className='mb-1 flex flex-col gap-6'>
               <Typography variant='h6' color='black' className='-mb-4'>
                  Your Name
               </Typography>
               <Input
                  size='lg'
                  placeholder='name@mail.com'
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 text-cyan-200'
                  labelProps={{
                     className: 'before:content-none after:content-none',
                  }}
               />
               <Typography variant='h6' color='black' className='-mb-4'>
                  Your Email
               </Typography>
               <Input
                  size='lg'
                  placeholder='name@mail.com'
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 text-cyan-200'
                  labelProps={{
                     className: 'before:content-none after:content-none',
                  }}
               />
               <Typography variant='h6' color='black' className='-mb-4'>
                  Password
               </Typography>
               <Input
                  type='password'
                  size='lg'
                  placeholder='********'
                  className=' border-2 border-black text-cyan-200'
                  labelProps={{
                     className: 'before:content-none after:content-none',
                  }}
               />
            </div>
            <div className='mt-4 flex items-center justify-evenly  gap-4'>
               <Radio
                  name='type'
                  icon={<Icon />}
                  label={
                     <Typography className='text-white hover:before:opacity-0'>
                        Admin
                     </Typography>
                  }
               />
               <Radio
                  name='type'
                  icon={<Icon />}
                  label={
                     <Typography className='text-white hover:before:opacity-0'>
                        User
                     </Typography>
                  }
               />
            </div>
            <Button className='mt-4' fullWidth>
               sign up
            </Button>
            <Typography color='black' className='mt-3 text-center font-normal'>
               Already have an account?{' '}
               <a
                  href='#'
                  className='font-bold text-green-300 hover:text-white'
                  onClick={(e) => {
                     e.preventDefault()
                     navigate('/signin')
                  }}
               >
                  Sign In
               </a>
            </Typography>
         </form>
      </Card>
   )
}

export default Register

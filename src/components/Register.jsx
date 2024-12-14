import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

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
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 text-cyan-200'
                  labelProps={{
                     className: 'before:content-none after:content-none',
                  }}
               />
            </div>
            <Checkbox
               label={
                  <Typography
                     variant='small'
                     color='black'
                     className='flex items-center font-normal'
                  >
                     I agree the
                     <a
                        href='#'
                        className='font-medium transition-colors hover:text-white'
                     >
                        &nbsp;Terms and Conditions
                     </a>
                  </Typography>
               }
               containerProps={{ className: '-ml-2.5' }}
            />
            <Button className='mt-6' fullWidth>
               sign up
            </Button>
            <Typography color='black' className='mt-4 text-center font-normal'>
               Already have an account?{' '}
               <a
                  href='#'
                  className='font-bold text-green-500 hover:text-white'
                  onClick={(e) => {
                     e.preventDefault()
                     navigate('/singin')
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

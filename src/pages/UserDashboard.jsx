import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import {
   Button,
   Typography,
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
   Drawer,
} from '@material-tailwind/react'

function UserDashboard() {
   const scheduledInterviews = [
      'Interview 1',
      'Interview 2',
      'Interview 3',
      'Interview 4',
      'Interview 5',
      'Interview 6',
   ]

   const [isLoggedIn, setIsLoggedIn] = useState(true)
   const [selectedInterview, setSelectedInterview] = useState('Interview 2')
   const navigate = useNavigate()

   const [code, setCode] = useState('')

   // Function to handle input
   const handleInputChange = (e) => {
      const value = e.target.value
      // Allow only numbers and limit to 6 digits
      if (/^\d{0,6}$/.test(value)) {
         setCode(value)
      }
   }

   const handleStartInterview = () => {
      console.log('Interview Started')
      navigate('/user/:id')
   }

   const [allcheckscompleted, setAllChecksCompleted] = useState(false) // to check if all checks are completed

   return (
      <>
         <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
            <Navbar isLoggedIn={isLoggedIn} />
            {/* Sidebar */}

            {/* Main Content */}
            <div className='px-4 py-3 bg-white/40 my-10 mx-auto max-w-6xl min-h-[74.5vh]'>
               <header className='mb-3'>
                  <Typography
                     variant='h1'
                     className='font-bold font-serif text-center'
                  >
                     Welcome Back, User
                  </Typography>
               </header>
               <div className='flex justify-between bg-transparent min-h-[59vh]'>
                  {/* Sidebar */}
                  <div
                     class={` flex flex-col  rounded-lg shadow-sm p-4 m-2 text-center justify-evenly bg-white/30 ${
                        allcheckscompleted ? 'w-1/3' : 'w-1/2'
                     }`}
                  >
                     <div className='bg-white/30 m-1 p-2 rounded-lg items-center'>
                        <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                           Interview Avaialble to Join:
                        </p>
                        <div className='flex justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Interview 2
                           <button
                              onClick={handleStartInterview}
                              disabled={selectedInterview === null}
                              className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-xs py-1 px-1 w-12 disabled:bg-red-400 disabled:text-opacity-60  font-medium disabled:font-normal'
                           >
                              Join
                           </button>
                        </div>
                     </div>

                     {/* 2nd part */}
                     <div className=' bg-white/30 m-1 p-2 rounded-lg items-center'>
                        <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                           Join Interview with Code:
                        </p>
                        <div className='flex flex-col justify-between items-center border-2 border-black rounded-b-md py-1 px-2'>
                           Enter Code Below to Join:
                           <div className='flex gap-4 my-2 items-center justify-evenly'>
                              <input
                                 id='interview-code'
                                 type='text'
                                 inputMode='numeric'
                                 maxLength='6'
                                 value={code}
                                 onChange={handleInputChange}
                                 placeholder='XXXXXX'
                                 className='w-32 p-2 text-center border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300 placeholder-dashed'
                              />
                              <button
                                 onClick={() => {
                                    if (code === '123456') {
                                       alert(
                                          `Joining with code: ${code}, Complete System Requirements first!`
                                       )
                                       setAllChecksCompleted(true)
                                       // handleStartInterview()
                                    } else {
                                       alert('Invalid Code')
                                    }
                                 }}
                                 disabled={selectedInterview === null}
                                 className='bg-green-400 text-black rounded-md border border-purple-500 shadow-sm text-lg py-1 px-4 w-20 disabled:bg-red-400 disabled:text-opacity-60 font-medium disabled:font-normal'
                              >
                                 Join
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* content show  */}
                  <div
                     className={`bg-white/30 w-1/3 m-4 rounded-lg items-center ${
                        allcheckscompleted ? 'w-1/3' : 'w-1/2'
                     }`}
                  >
                     <p className='mb-0 p-2 text-center text-xl font-semibold font-monospace'>
                        Requirements for Interview:
                     </p>
                  </div>

                  {/* Interviews  */}
                  {allcheckscompleted && (
                     <div className='bg-white/60 w-1/3 m-2 p-1 items-center flex flex-col rounded-lg'>
                        <img src='/atb.png' alt='' className='w-36 h-36' />
                        <img src='/dyb.png' alt='' className='w-full h-full' />
                        <button
                           disabled
                           type='button'
                           class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                           <svg
                              aria-hidden='true'
                              role='status'
                              class='inline w-4 h-4 me-3 text-white animate-spin'
                              viewBox='0 0 100 101'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                           >
                              <path
                                 d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                 fill='#E5E7EB'
                              />
                              <path
                                 d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                 fill='currentColor'
                              />
                           </svg>
                           Joining...
                        </button>
                     </div>
                  )}
               </div>
            </div>
            <Footer />
         </div>
      </>
   )
}
export default UserDashboard

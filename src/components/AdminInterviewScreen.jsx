import { Card } from '@material-tailwind/react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'

function AdminScreen() {
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   let screen = 'both'
   return (
      <>
         <div className="min-h-screen p-4 bg-[url('/fallback.png')] bg-cover bg-center">
            <div className='flex max-w-9xl min-h-full bg-yellow-200 p-4 gap-4'>
               <div className='bg-blue-300 w-1/3 p-2'>12</div>

               <div className='flex flex-col gap-4 bg-blue-500 w-2/3 p-4'>
                  <div
                     class='inline-flex rounded-md justify-center items-center'
                     role='group'
                  >
                     <button
                        type='button'
                        value='canvas'
                        class='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           screen = 'canvas'
                        }}
                     >
                        Canvas
                     </button>
                     <button
                        type='button'
                        value='code'
                        class='px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           screen = 'code'
                        }}
                     >
                        CodeArea
                     </button>
                     <button
                        type='button'
                        value='both'
                        class='px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white'
                        onClick={() => {
                           screen = 'both'
                        }}
                     >
                        Both
                     </button>
                  </div>
                  <div className='flex gap-4 m-2'>
                     <div
                        className={`h-[540px] bg-white/30 p-1 ${
                           screen === 'canvas'
                              ? 'w-hidden'
                              : screen === 'both'
                              ? 'w-1/2'
                              : 'w-full'
                        }`}
                     >
                        Code Screen
                     </div>
                     <div
                        className={` min-h-96 bg-white/30 p-1 ${
                           screen === 'code'
                              ? 'w-hidden'
                              : screen === 'both'
                              ? 'w-1/2'
                              : 'w-full'
                        }`}
                     >
                        Draw Board
                     </div>
                  </div>
               </div>
            </div>
            {/* <div className='flex justify-start min-w-screen min-h-full border-2 m-1'>
               <div className='flex flex-wrap gap-4'>
                  <Card className='mt-6 ml-10 w-64 h-48 bg-yellow-200 border-2 border-cyan-300'>
                     <h1 className='text-center mt-20'>
                        Admin Video Placeholder
                     </h1>
                  </Card>
                  <Card className='mt-6 ml-6 w-64 h-48 bg-yellow-200 border-2 border-cyan-300'>
                     <h1 className='text-center mt-20'>
                        User Video Placeholder
                     </h1>
                  </Card>
                  <Card className='ml-6 bg-blue-400 border-2 border-cyan-300 w-[600px] h-80'>
                     <h1 className='text-center mt-20'>Draw Board</h1>
                  </Card>
               </div>

               <Card className='mt-6 mr-6 mb-6 w-[650px] xl:h-[547px] bg-green-300 border-2 border-cyan-300'>
                  <h1 className='text-center mt-20'>Code Area</h1>
               </Card>
            </div> */}
         </div>
      </>
   )
}
export default AdminScreen

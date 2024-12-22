import { Card } from '@material-tailwind/react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'

function AdminScreen() {
   const [isLoggedIn, setIsLoggedIn] = useState(true)
   return (
      <>
         <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
            <Navbar isLoggedIn={isLoggedIn} />
            <div className='flex justify-start min-w-screen min-h-full border-2 m-1'>
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
            </div>
            <Footer />
         </div>
      </>
   )
}
export default AdminScreen

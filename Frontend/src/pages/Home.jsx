import { useNavigate } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

function Home() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const videoRef = useRef(null)

   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.playbackRate = 2.5
      }
   }, [])
   const navigate = useNavigate()
   return (
      <>
         <div className='w-full h-screen overflow-hidden'>
            {/* Video Background */}
            <video
               ref={videoRef}
               autoPlay
               loop
               muted
               playsInline
               className='w-full h-full object-cover fixed top-0 left-0 -z-10'
               poster='/fallback.png'
            >
               <source src='/bg3.mp4' type='video/mp4' />
            </video>

            <Navbar isLoggedIn={isLoggedIn} />
            <div className=' flex flex-col align-center min-w-screen min-h-max m-2'>
               <h1 className=' text-gray-800 mt-8 mb-3 font-extrabold text-3xl text-center'>
                  Welcome to,
               </h1>
               <h1 className=' text-black mt-0 mb-3 font-extrabold text-6xl text-center'>
                  The Interview Sphere
               </h1>
               <h4 className=' text-gray-800 mt-0 mb-2.5 font-extrabold text-xl text-center'>
                  A Platform for Collaborative Inteviews.
               </h4>
               <div className='flex justify-center gap-6 mt-5 mb-10'>
                  <div className=' bg-transparent border-black flex justify-center items-center gap-5 p-2 mt-1'>
                     {/* user  */}
                     <div className='flex flex-col items-center border border-black p-1 m-1 w-64 rounded-lg  bg-white/40'>
                        <img
                           src='/programmer.png'
                           alt=''
                           preload='auto'
                           className='h-30 w-30 mb-4'
                        />

                        <button
                           className='btn btn-ghost bg-yellow-200 border-2 border-red-500 py-1 px-2 rounded-lg mb-3 hover:opacity-80'
                           onClick={() => {
                              navigate('/signin?type=user')
                           }}
                        >
                           Sign In
                        </button>
                     </div>

                     {/* new  */}
                     <div className='flex flex-col items-center border border-black p-1 m-1 w-64 rounded-md  bg-white/40'>
                        <img
                           src='/boy.png'
                           alt=''
                           preload='auto'
                           className='h-30 w-30 mb-4'
                        />

                        <button
                           className='btn bg-yellow-200 border-2 border-red-500 py-1 px-2 rounded-md mb-3 hover:opacity-80'
                           onClick={() => {
                              navigate('/register')
                           }}
                        >
                           Sign Up
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <Footer />
         </div>
      </>
   )
}
export default Home

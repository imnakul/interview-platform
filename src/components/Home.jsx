import { Card } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate = useNavigate()
   return (
      <>
         <div
            className='flex flex-col align-center min-w-screen min-h-max
          border-2 m-2'
         >
            <h1 className=' text-white mt-10 mb-5 font-extrabold text-7xl text-center'>
               Welcome
            </h1>
            <div className='flex justify-center gap-4 mt-4 mb-20'>
               <div className=' bg-transparent border-black flex justify-center items-center gap-2 p-2 mt-1'>
                  {/* admin  */}
                  <div className='flex flex-col items-center border border-black p-1 m-1 w-64 rounded-lg  bg-white/40'>
                     <img
                        src='/manager.png'
                        alt=''
                        className='h-30 w-30 mb-2'
                     />
                     <h2>Admin</h2>
                     <button
                        className='btn btn-ghost bg-yellow-200 border-2 border-red-500 py-1 px-2 rounded-lg mb-2 hover:opacity-80'
                        onClick={() => {
                           navigate('/signin?type=admin')
                        }}
                     >
                        Sign In
                     </button>
                  </div>

                  {/* user  */}
                  <div className='flex flex-col items-center border border-black p-1 m-1 w-64 rounded-lg  bg-white/40'>
                     <img
                        src='/programmer.png'
                        alt=''
                        className='h-30 w-30 mb-2'
                     />
                     <h2>User</h2>
                     <button
                        className='btn btn-ghost bg-yellow-200 border-2 border-red-500 py-1 px-2 rounded-lg mb-2 hover:opacity-80'
                        onClick={() => {
                           navigate('/signin?type=user')
                        }}
                     >
                        Log In
                     </button>
                  </div>

                  {/* new  */}
                  <div className='flex flex-col items-center border border-black p-1 m-1 w-64 rounded-md  bg-white/40'>
                     <img src='/boy.png' alt='' className='h-30 w-30 mb-2' />
                     <h2>New</h2>
                     <button
                        className='btn bg-yellow-200 border-2 border-red-500 py-1 px-2 rounded-md mb-2 hover:opacity-80'
                        onClick={() => {
                           navigate('/register')
                        }}
                     >
                        Sign Up
                     </button>
                  </div>
               </div>

               {/* <div className='flex flex-col gap-1 mt-20 p-2 w-52 h-60 bg-pink-300'>
                  <p>New User/Admin ?</p>
                  <p>Click Below to SignUp</p>
                  <img
                     src='/programmer.png'
                     alt=''
                     className='h-30 w-30 mb-4'
                  />
                  <h2>New User</h2>
                  <button className='btn btn-ghost bg-yellow-200 border-2 border-red-500 p-1 rounded-md'>
                     Sign Up
                  </button>
               </div> */}
            </div>
         </div>
      </>
   )
}
export default Home

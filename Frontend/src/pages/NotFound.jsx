import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
         <img
            src='/404-error-animate.svg'
            alt='Not Found'
            className='max-w-xl max-h-xl loading="lazy"'
         />

         <Link to='/'>
            <button className='px-4 py-2 bg-purple-600 text-white border-2 border-purple-800 rounded-md shadow-xl hover:bg-purple-800 focus:ring-2  hover:ring-2 ring-purple-400  hover:border-none mb-20'>
               Go to Home
            </button>
         </Link>
      </div>
   )
}

export default NotFound

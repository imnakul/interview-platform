function About() {
   return (
      <div className="min-h-screen bg-[url('/fallback.png')] bg-cover bg-center">
         <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-8'>
            <div class='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10 mb-8'>
               <h1 class='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2'>
                  The Interview Platform
               </h1>
               <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>
                  Static websites are now used to bootstrap lots of websites and
                  are becoming the basis for a variety of tools that even
                  influence both web designers and developers.
               </p>
               {/* <a
                  href='#'
                  class='inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
               >
                  Read more
                  <svg
                     class='w-3.5 h-3.5 ms-2 rtl:rotate-180'
                     aria-hidden='true'
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 14 10'
                  >
                     <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                     />
                  </svg>
               </a> */}
            </div>
            <div class='grid md:grid-cols-3 gap-8'>
               <div class='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10'>
                  <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
                     Collaborative Features
                  </h2>
                  <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-2'>
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Ut omnis exercitationem consequatur deserunt ratione fuga
                     et, ullam suscipit voluptates optio nihil magnam vel quasi
                     esse iusto mollitia? Nihil, at soluta?
                  </p>
               </div>
               <div class='bg-gray-50 dark:bg-transparent/50 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10'>
                  <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
                     Live Video & Chat
                  </h2>
                  <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nihil doloremque enim odit harum adipisci labore similique,
                     blanditiis voluptas est ab qui officiis molestiae
                     exercitationem delectus nisi debitis corrupti alias
                     tempore!
                  </p>
               </div>
               <div class='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-10'>
                  <h2 class='text-gray-900 dark:text-white text-3xl font-extrabold mb-4'>
                     Admin & User Dashboard
                  </h2>
                  <p class='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Quasi at libero, tempora voluptatum quo necessitatibus
                     vitae quos ipsum expedita soluta, dolores reprehenderit.
                     Enim quam beatae officia soluta delectus rem nisi.
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default About

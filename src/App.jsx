import './App.css'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactSection from './pages/ContactUs.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
import AdminScreen from './components/AdminInterviewScreen.jsx'
import UserScreen from './components/UserInterviewScreen.jsx'
import { useState } from 'react'
import LightingCard from './components/CardTryOut.jsx'

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   return (
      <>
         {/* <LightingCard /> */}
         <Router>
            {/* <div className='bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)] min-h-screen'> */}
            <div className='w-full h-screen overflow-hidden'>
               {/* Video Background */}
               <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className='w-full h-full object-cover fixed top-0 left-0 -z-10'
               >
                  <source src='/bg3.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
               </video>
               <Navbar state={isLoggedIn} />
               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/contact' element={<ContactSection />}></Route>
                  <Route path='/signin' element={<SignIn />}></Route>
                  <Route path='/register' element={<Register />}></Route>
                  <Route path='/admin/:id' element={<AdminScreen />}></Route>
                  <Route path='/user/:id' element={<UserScreen />}></Route>
               </Routes>

               <Footer />
            </div>
         </Router>
      </>
   )
}

export default App

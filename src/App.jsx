import './App.css'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactSection from './components/ContactUs.jsx'
import SignIn from './components/SignIn.jsx'
import Register from './components/Register.jsx'

function App() {
   return (
      <>
         <Router>
            <div className='bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)] min-h-screen'>
               <Navbar />
               <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/contact' element={<ContactSection />}></Route>
                  <Route path='/signin' element={<SignIn />}></Route>
                  <Route path='/register' element={<Register />}></Route>
               </Routes>

               <Footer />
            </div>
         </Router>
      </>
   )
}

export default App

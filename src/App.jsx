import './App.css'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactSection from './pages/ContactUs.jsx'
import SignIn from './pages/SignIn.jsx'
import Register from './pages/Register.jsx'
import AdminScreen from './components/AdminInterviewScreen.jsx'
import UserScreen from './components/UserInterviewScreen.jsx'
import About from './pages/About.jsx'

// import LightingCard from './components/CardTryOut.jsx'

function App() {
   return (
      <>
         {/* <LightingCard /> */}
         <Router>
            {/* <div className='bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)] min-h-screen'> */}

            <Routes>
               <Route path='/' element={<Home />}></Route>
               <Route path='/contact' element={<ContactSection />}></Route>
               <Route path='/about' element={<About />}></Route>
               <Route path='/signin' element={<SignIn />}></Route>
               <Route path='/register' element={<Register />}></Route>
               <Route path='/admin/:id' element={<AdminScreen />}></Route>
               <Route path='/user/:id' element={<UserScreen />}></Route>
            </Routes>

            {/* </div> */}
         </Router>
      </>
   )
}

export default App

import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
   return (
      <>
         <div className='bg-[linear-gradient(109.6deg,_rgb(9,_9,_121)_11.2%,_rgb(144,_6,_161)_53.7%,_rgb(0,_212,_255)_100.2%)] min-h-screen'>
            <Navbar />
            <div className='min-w-screen min-h-screen border-2 m-1'></div>
            <Footer />
         </div>
      </>
   )
}

export default App

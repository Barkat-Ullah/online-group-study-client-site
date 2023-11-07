import { Outlet } from 'react-router-dom'
import './App.css'
// import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'


function App() {

  return (
    <>
     <Navbar></Navbar>
     <div className='max-w-6xl mx-auto'>
    <Outlet></Outlet>
     </div>

    </>
  )
}

export default App

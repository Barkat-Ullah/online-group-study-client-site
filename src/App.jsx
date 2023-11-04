
import './App.css'
import Banner from './components/layout/Banner'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Contact from './pages/Contact'
import Faq from './pages/Faq.jsx/Faq'
import Team from './pages/Team'

function App() {


  return (
    <>
     <Navbar></Navbar>
     <div className='max-w-6xl mx-auto'>
      <Banner></Banner>


      <Faq></Faq>
      <Team></Team>
      <Contact></Contact>
     </div>
      <Footer></Footer>
    </>
  )
}

export default App

import Contact from '@/app/Components/Contact'
import Invitation from '@/app/Components/Invitation'
import Service from '@/app/Components/Service'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Stats from './Components/Stats'
import Incitation from './Components/Incitation'
import Members from './Components/Members'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full">
         <About />
         <Service/>
         <Invitation/>
         <Stats/>
         <Members/>
         <Incitation/>  
         <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

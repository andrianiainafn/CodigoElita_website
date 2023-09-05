import Contact from '@/app/Components/Contact'
import Service from '@/app/Components/Service'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Stats from './Components/Stats'
import Incitation from './Components/Incitation'
import Project from './Components/Project/Project'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full">
         <About />
         <Stats/>
         <Service/>
         <Incitation/>
         <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

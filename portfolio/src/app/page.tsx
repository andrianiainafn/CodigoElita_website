import Contact from '@/app/Components/Contact'
import Service from '@/app/Components/Service'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Project from './Components/Project/Project'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full">
         <About />
         <Service/>
         <Project />
         {/* <Invitation/> */}
         <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

import Contact from '@/app/Components/Contact'
import Invitation from '@/app/Components/Invitation'
import Service from '@/app/Components/Service'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header'
import About from './Components/About'

export default function Home() {
  return (
    <>
      <Header/>
      <main className="w-full">
         <About />
         <Service/>
         <Invitation/>
         <Contact/>
      </main>
      <footer>

      </footer>
    </>
  )
}

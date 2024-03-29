import Contact from '@/app/Components/Contact'
import Service from '@/app/Components/Service'
import Header from './Components/Header'
import About from './Components/About'
import Footer from './Components/Footer'
import Stats from './Components/Stats'
import Incitation from './Components/Incitation'
import Members from './Components/Members/Members'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="w-full">
         <About />
         <Stats/>
         <Service/>
         <Members/>
         <Incitation/>
         <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

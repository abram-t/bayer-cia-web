import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'
import Clients from '../components/sections/Clients'
import Coverage from '../components/sections/Coverage'
import QuoteForm from '../components/sections/QuoteForm'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Clients />
        <Coverage />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}

export default Home
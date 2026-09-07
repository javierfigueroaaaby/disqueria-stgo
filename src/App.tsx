import heroImg from './assets/img/hero.jpg'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (   
    <>
      <Header />
      <Hero
          title="Disquería Stgo"
          subtitle="Encuentra la música de tu vida"
          buttonText="Ver productos"
          image={heroImg}
          buttonColor="primary"
          buttonUrl="#products"
          buttonTarget="_self"
        />
      <Footer />
    </>
  )
}

export default App

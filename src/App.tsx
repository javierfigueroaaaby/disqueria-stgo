import heroImg from './assets/img/hero-shopping.jpg'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [search, setSearch] = useState('')


  return (   
    <>
      <Header />
      <section id="nosotros">
        <Hero
            title="Shopping Stgo"
            subtitle="Encuentra lo apropiado para ti"
            buttonText="Ver productos"
            image={heroImg}
            buttonColor="primary"
            buttonUrl="#productos"
            buttonTarget="_self"
          />
      </section>
      <section id="productos" className="section-py">
        <h2>Productos Destacados</h2>
        <SearchBar value={search} onChange={setSearch} placeholder="Buscar productos..." />
        <ProductList search={search} />
      </section> 
      <Footer />
    </>
  )
}

export default App

import heroImg from './assets/img/hero.jpg'
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
      <section id="hero">
        <Hero
            title="Disquería Stgo"
            subtitle="Encuentra la música de tu vida"
            buttonText="Ver productos"
            image={heroImg}
            buttonColor="primary"
            buttonUrl="#products"
            buttonTarget="_self"
          />
      </section>
      <section id="products" className="section-py">
        <h2>Productos Destacados</h2>
        <SearchBar value={search} onChange={setSearch} placeholder="Buscar productos..." />
        <ProductList search={search} />
      </section> 
      <Footer />
    </>
  )
}

export default App

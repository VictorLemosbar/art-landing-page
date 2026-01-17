import { useState } from 'react'
import './App.css'

import Main from './Layout/Main/Main'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'


import Layout from './Layout/Layout'

import InforCard from './Cards/InforCards'
import HeroSection from './Content/HeroSection'
import Products from './Content/Products/Products'



function App() {
  const [count, setCount] = useState(0)

  return (


    <>
      <Layout>
        <Header />
        <Main>
          <HeroSection />
          <InforCard />
          <Products />
        </Main>
        <Footer />
      </Layout>
    </>

  )
}

export default App

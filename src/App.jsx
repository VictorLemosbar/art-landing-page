import { useState } from 'react'
import './App.css'

import Main from './Layout/Main/Main'
import Header from './Layout/Header/Header'

import Layout from './Layout/Layout'

import InforCard from './Cards/InforCards'
import HeroSection from './Content/HeroSection'
import Footer from './Layout/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (


    <>
      <Layout>
        <Header />
        <Main>
          <HeroSection />
          <InforCard />
        </Main>
        <Footer />
      </Layout>
    </>

  )
}

export default App

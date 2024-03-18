import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import Popular from '../../components/Popular/Popular'

const Home = ({userName,cart}) => {
  return (
    <>
      <Hero/>
      <Service/>
      <Gallery/>
      <Popular/>
    </>
  )
}

export default Home
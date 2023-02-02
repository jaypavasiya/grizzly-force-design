import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ForEmployers from '../components/ForEmployers'
import ForJobSeekers from '../components/ForJobSeekers'
import GrizzlyForceCities from '../components/GrizzlyForceCities'
import Industries from '../components/Industries'
import LookingFor from '../components/LookingFor'
import Navbar from '../components/Navbar'
import Ondemad from '../components/Ondemad'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Ondemad />
      <Industries />
      <div className="saprater"></div>
      <ForEmployers />
      <Testimonials />
      <ForJobSeekers />
      <div className="saprater"></div>
      <GrizzlyForceCities />
      <LookingFor />
      <Footer />
    </>
  )
}

export default Home
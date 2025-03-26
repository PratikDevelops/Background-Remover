import React from 'react'
import Header from '../components/Header'
import Testimonials from '../components/Testimonials'
import Plans from '../components/Plans'
import BeforeAfterSliderComponent from '../components/BgSlider'

function Home() {
  return (
    <div>
        <Header/>
        <BeforeAfterSliderComponent/>
        <Testimonials/>
    </div>
  )
}

export default Home
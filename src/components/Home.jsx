import React from 'react'
import Header from './Header'
import FAQ from './FAQ'
import Hero from './Hero'
import Flashcard from './Flashcard'

function Home() {
  return (
    <div className='home flex-v'>
      <Header />
      <Flashcard />
      {/* <Hero /> */}
      <FAQ />
    </div>
  )
}

export default Home

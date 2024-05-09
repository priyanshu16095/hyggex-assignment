import React from 'react'
import Header from './Header'
import FAQ from './FAQ'
import Flashcards from './Flashcards'

function Home() {
  return (
    <div className='home flex-v'>
      <Header />
      <Flashcards />
      <FAQ />
    </div>
  )
}

export default Home

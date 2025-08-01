import React from 'react'
import Banner from '../../page/Banner/Index'
import styles from './Home.module.css'
import HeroLinks from './components/HeroLinks'
import FlashSales from './components/FlashSales'

function Index() {
  return (
    <div className='container'>
      <div className={styles.hero_banner_container}>
        <HeroLinks/>
        <Banner/> 
      </div>
      <FlashSales/>
    </div>
  )
}

export default Index
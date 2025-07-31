import Banner from '../../page/Banner/Index'
import styles from './Home.module.css'
import HeroLinks from './components/HeroLinks'

function Index() {
  return (
    <div className='container'>
      <div className={styles.hero_banner_container}>
        <HeroLinks/>
        <Banner/>
      </div>
    </div>
  )
}

export default Index
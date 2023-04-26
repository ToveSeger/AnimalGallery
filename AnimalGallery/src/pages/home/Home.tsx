import { BigNavButton } from '../../components/UI/bigNavButton/BigNavButton'
import { HorizontalTextBlock } from '../../components/horizontalTextBlock/HorizontalTextBlock'
import { Navbar } from '../../components/navbar/Navbar'
import styles from './Home.module.scss'

export const Home = () => {


  return (
    <>
    <Navbar/>
      <div className={styles.home}>
        <HorizontalTextBlock text={"What do you want to have a look at?"}/>
          <div className={styles.buttonContainer}>
              <BigNavButton ButtonText="Exotic animals" NavLink="/exotic"/>
              <BigNavButton ButtonText="Scandinavian animals" NavLink="/scandinavian"/>
          </div>
      </div>
    </>
  )
}

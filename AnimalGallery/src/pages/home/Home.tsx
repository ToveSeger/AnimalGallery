import { BigNavButton } from '../../components/bigNavButton/BigNavButton'
import { HorizontalTextBlock } from '../../components/horizontalTextBlock/HorizontalTextBlock'
import styles from './Home.module.scss'

export const Home = () => {


  return (
    <div className={styles.home}>
      <HorizontalTextBlock text={"What do you want to have a look at?"}/>
        <div className={styles.buttonContainer}>
            <BigNavButton ButtonText="Exotic animals" NavLink="/exotic"/>
            <BigNavButton ButtonText="Scandinavian animals" NavLink="/scandinavian"/>
        </div>
    </div>
  )
}

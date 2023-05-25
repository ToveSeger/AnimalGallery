import { ClickableCard } from '../../components/cardComponents/clickableCard/ClickableCard'
import { HorizontalTextBlock } from '../../components/textComponents/horizontalTextBlock/HorizontalTextBlock'
import { Navbar } from '../../components/navbar/Navbar'
import styles from './Home.module.scss'
import { GiKoala, GiLadybug } from 'react-icons/gi';

export const Home = () => {


  return (
    <>
      <div className={styles.home}>
        <HorizontalTextBlock text={"What do you want to have a look at?"}/>
          <div className={styles.buttonContainer}>
              <ClickableCard
              Text="Exotic animals"
              Link="/exotic"
              sticker={<GiKoala/>}
              stickerColor="#7C3333"
              stickerPosition="left"
              />
              <ClickableCard
              Text="Scandinavian animals"
              Link="/scandinavian"
              sticker={<GiLadybug/>}
              stickerColor="#bd463f"
              stickerPosition="right"
              />
          </div>
          {/* <div className={styles.animalLogosWrapper}>
            <div className={styles.koala}>
              <GiKoala/>
            </div>
            <div className={styles.ladybug}>
              <GiLadybug/>
            </div>
          </div> */}
      </div>
    </>
  )
}

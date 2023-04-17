import { Routes, Route } from 'react-router-dom';
import {Exotic} from './pages/exotic/Exotic';
import {Home} from './pages/home/Home';
import { Scandinavian } from './pages/scandinavian/Scandinavian';
import { NoMatch } from './pages/noMatch/NoMatch';
import styles from'./App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exotic" element={<Exotic/>}/>
        <Route path="/scandinavian" element={<Scandinavian/>}/>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      {/* <AnimalContent className={styles.animalGallery} animalList={Animals}/> */}
    </div>
  );
}

export default App;

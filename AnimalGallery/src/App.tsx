import { Routes, Route } from 'react-router-dom';
import {Exotic} from './pages/exotic/Exotic';
import {Home} from './pages/home/Home';
import { Scandinavian } from './pages/scandinavian/Scandinavian';
import { NoMatch } from './pages/noMatch/NoMatch';
import styles from'./App.module.scss';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';

function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exotic" element={<Exotic/>}/>
          <Route path="/scandinavian" element={<Scandinavian/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

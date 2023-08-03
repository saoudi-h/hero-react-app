
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Carte, { Heros } from './components/carte/Carte';
import Cartes from './components/cartes/Cartes';
import Compteur from './components/compteur/Compteur';
import HerosLists from './components/herosLists/HerosLists';
import Data from './data/Data';
function App() {
  const allHeros:Heros[] = new Data().getAll();
  return (
    <div className="App">
      <Header />
      {/* <Carte id={1} name='fatigman' civil='hakim' age={32} image='https://avatars.githubusercontent.com/u/68503582?v=4' ville='Oyonnax' /> */}
      {/* <Cartes /> */}
      <HerosLists allHeros={allHeros}/>
      <Compteur />
      <Footer />
    </div>
  );
}

export default App;

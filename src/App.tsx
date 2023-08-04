
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Home from './pages/home/Home';
import HerosPage from './pages/herosPage/HerosPage';
import HerosDetail from './pages/herosDetail/HerosDetail';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/heros' element={<HerosPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/heros/profile/:id' element={<HerosDetail />} />

        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

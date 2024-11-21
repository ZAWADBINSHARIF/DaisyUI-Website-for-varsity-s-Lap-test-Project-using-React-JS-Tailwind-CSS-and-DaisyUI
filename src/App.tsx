import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Features from './components/Features';
import Footer from './components/Footer';
import MapView from './components/MapView';

function App() {

  return (
    <div className='bg-neutral-200'>
      <Header />
      <Carousel />
      <Features />
      <MapView />
      <Footer />
    </div>
  );
}

export default App;

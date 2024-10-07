import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
// import TopLine from './component/TopLine';

function App() {
  return (
    <>
      <BrowserRouter>
          {/* <TopLine /> */}
          <Navbar />
          <Routes >
           <Route path='/' element={ <Home />} />
       
           <Route path='/aboutUs' element={ <About />} />
           <Route path='/gallery' element={ <Gallery />} />
           <Route path='/contactUs' element={ <Contact />} />
          </Routes>
      
        <Footer />
      
      </BrowserRouter>
    </>
  );
  
}

export default App;

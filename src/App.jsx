import React from 'react'; 
import './Css/App.css';
import Header from './Components/Header';
import CarouselContainer from './Components/CarouselContainer'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='FirstContainer'>
      <Header />
      <CarouselContainer />
      <Footer />
    </div>
  );
}

export default App;

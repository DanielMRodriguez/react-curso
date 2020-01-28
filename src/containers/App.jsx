import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => (

  <div className='App'>
    <Header />
    <Search />
    <Categoria title='Mi lista'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categoria>

    <Categoria title='Tendencias'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categoria>

    <Categoria title='Originales de PlatziVideo'>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categoria>
    <Footer />
  </div>
);

export default App;

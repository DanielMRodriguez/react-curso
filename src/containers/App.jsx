import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => (

  <div className='App'>
    <Header />
    <Search />
    <Categoria>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categoria>
  </div>
);

export default App;

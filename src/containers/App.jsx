/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/InitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const InitialState = useInitialState(API);
  return InitialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && (
        <Categoria title='Mi Lista'>
          <Carousel>
            {InitialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categoria>
      )}
      <Categoria title='Tendencias'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categoria>
      <Categoria title='Originales de Platzi Video'>
        <Carousel>
          {InitialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categoria>
      <Footer />
    </div>
  );
};

export default App;

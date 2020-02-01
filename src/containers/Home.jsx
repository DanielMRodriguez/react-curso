/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/InitialState';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const InitialState = useInitialState(API);
  return InitialState.length === 0 ? <h1>Loading...</h1> : (
    <>
      
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
      
    </>
  );
};

export default Home;

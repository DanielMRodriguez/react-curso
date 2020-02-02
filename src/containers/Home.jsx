/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      
      <Search />
      {myList.length > 0 && (
        <Categoria title='Mi Lista'>
          <Carousel>
            {myList.map((item) => (
              <CarouselItem
                key={item.id}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categoria>
      )}
      <Categoria title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categoria>
      <Categoria title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categoria>
      
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);

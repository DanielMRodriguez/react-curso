import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categoria from '../components/Categoria';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
  if (videos.trends) {
    var len = videos.mylist.length;
    var mapa = videos.trends;
  }
  return (

    <div className='App'>
      <Header />
      <Search />

      {len > 0 && (
        <Categoria title='Mi lista'>
          <Categoria>
            <CarouselItem />
          </Categoria>
        </Categoria>
      )}

      <Categoria title='Tendencias'>
        <Carousel>
          {
            mapa.map((item) => {<CarouselItem key={item.id} {...item} />})
          }
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
};
export default App;

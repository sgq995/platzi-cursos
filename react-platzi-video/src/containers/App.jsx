import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = '//localhost:3000/initalState';

function mapToCarouselItem(list = []) {
  return list.map(item => (
    <CarouselItem
      key={item.id}
      {...item}
    />
  ));
}

function createCategoryContainer(title, list = []) {
  return list.length > 0 && (
    <Categories title={title}>
      <Carousel>
        {mapToCarouselItem(list)}
      </Carousel>
    </Categories>
  );
}

function App() {
  const videos = useInitialState(API);

  return (
    <div className="App">
      <Header />
      <Search />

      {createCategoryContainer('Mi lista', videos.mylist)}

      {createCategoryContainer('Tendencias', videos.trends)}

      {createCategoryContainer('Originales de Platzi Video', videos.originals)}

      <Footer />
    </div>
  );
}

export default App;

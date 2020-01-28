import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/components/Categoria.scss';

const Categoria = ({ children }) => (
  <div className='categories'>
    <h3 className='categories__title'>Mi lista</h3>
    {children}
  </div>
);

export default Categoria;

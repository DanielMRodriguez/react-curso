import React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../assets/styles/components/Categoria.scss';

const Categoria = ({ children, title }) => (
  <div className='categories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categoria;

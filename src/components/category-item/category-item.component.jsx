import React from 'react';
import { useNavigate } from 'react-router-dom';

import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { imageUrl, title, } = category;

  const openCategory = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div className='category-item-container' onClick={openCategory}>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }} />

      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
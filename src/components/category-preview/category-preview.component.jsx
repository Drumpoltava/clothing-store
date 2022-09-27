import React from 'react';

import { Link } from 'react-router-dom';

import ProductCard from '../product-card/product-card.component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) => {

    // products = 
    //    [
    //         {
    //             id:1,
    //             name: "Nike",
    //             price: 42
    //         },
    //         {
    //             id:2,
    //             name: "adidas",
    //             price: 55
    //         }
    //     ]

    return (
        <div className='category-preview-container'>
            <h2>
                {/* <span className='category-preview-container-title' to={title}>{title.toUpperCase()}</span> */}
                {/* <span className='category-preview-container-title' onClick={openCategory }>{title.toUpperCase()}</span> */}
                <Link to={title} className="category-preview-container-title">{title.toUpperCase()}</Link>
            </h2>
            <div className='category-preview-container-preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </div>
    )
}

export default CategoryPreview;
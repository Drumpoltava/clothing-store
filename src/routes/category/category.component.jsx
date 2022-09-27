import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import SpinnerCircleGrey from '../../components/spinner/circle-grey'; 


import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <h1 className='category-page-title'>{category.toUpperCase()}</h1>
            {
                isLoading ? (
                    <SpinnerCircleGrey />
                ) : (
                    <div className='category-page-container'>
                        {products &&
                            products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                    </div>
                )
            };

        </>
    );
};

export default Category;
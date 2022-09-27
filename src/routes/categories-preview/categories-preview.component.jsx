import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import SpinnerCircleGrey from '../../components/spinner/circle-grey';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            {/* ["hats", "jackets"] */}
            {
                isLoading ? <SpinnerCircleGrey /> :
                    Object.keys(categoriesMap).map(title => {
                        const products = categoriesMap[title];

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
                            <CategoryPreview key={title} title={title} products={products} />
                        );
                    })
            };

        </Fragment>
    );
};

export default CategoriesPreview;
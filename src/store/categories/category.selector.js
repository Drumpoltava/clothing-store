import { createSelector } from 'reselect';

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    categoriesSlice => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    categories =>
        categories.reduce((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
);

 export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
 );

    // state.categories.categories = [
    //     {
    //         title: "Hats",
    //         items: [
    //             {
    //                 id:1,
    //                 name: "Nike",
    //                 price: 42
    //             },
    //             {
    //                 id:2,
    //                 name: "adidas",
    //                 price: 55
    //             }
    //         ]
    //     },
    //     {
    //         title: "jackets",
    //         items: [
    //             {
    //                 id:1,
    //                 name: "Nike",
    //                 price: 42
    //             },
    //             {
    //                 id:2,
    //                 name: "adidas",
    //                 price: 55
    //             }
    //         ]
    //     }
    // ]

    // result = {
    //     "hats" : [
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
    //     ],
    //     "jackets" : [
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
    // }




import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) { // product found, do increment
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                }
            }

            return cartItem;
        });
    };

    // New product
    return [
        ...cartItems,
        {
            ...productToAdd,
            quantity: 1
        }
    ];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems; // cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToRemove.id) {
            return {
                ...cartItem,
                quantity: cartItem.quantity - 1
            }
        }
        return cartItem;
    })
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};


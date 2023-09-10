// actions.ts
import axios from 'axios';
import { Dispatch } from 'redux';

export const setProducts = (products: any) => ({
  type: 'SET_PRODUCTS',
  payload: products,
});

export const addToCart = (product: any) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};


export const loginUser = (userData: any) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});
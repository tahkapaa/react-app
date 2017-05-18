import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const PRODUCTS_FETCH_REQUEST = 'PRODUCTS_FETCH_REQUEST';
export const PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS';
export const PRODUCTS_FETCH_FAIL = 'PRODUCTS_FETCH_FAIL';

export function getProducts() {
  return (dispatch) => {
    dispatch({
      type: PRODUCTS_FETCH_REQUEST,
    });

    return axios
      .get(`${API_URL}/products`)
      .then((result) => {
        dispatch({
          type: PRODUCTS_FETCH_SUCCESS,
          payload: result.data,
        });
      })
      .catch(() => {
        dispatch({
          type: PRODUCTS_FETCH_FAIL,
        });
      });
  };
}


// export const PRODUCT_ADD = 'PRODUCT_ADD';
export const PRODUCT_ADD_REQUEST = 'PRODUCT_ADD_REQUEST';
export const PRODUCT_ADD_SUCCESS = 'PRODUCT_ADD_SUCCESS';
export const PRODUCT_ADD_FAIL = 'PRODUCT_ADD_FAIL';

export function addProduct(product) {
  // product.price = parseFloat(product.price) || 0;
  // return {
  //   type: PRODUCT_ADD,
  //   payload: product,
  // };

  return (dispatch) => {
    dispatch({
      type: PRODUCT_ADD_REQUEST,
    });

    return axios
      .post(`${API_URL}/products`, product)
      .then((result) => {
        dispatch({
          type: PRODUCT_ADD_SUCCESS,
          payload: result.data,
        });
      })
      .catch(() => {
        dispatch({
          type: PRODUCT_ADD_FAIL,
        });
      });
  };
}

// export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';
export const PRODUCT_UPDATE_REQUEST = 'PRODUCT_UPDATE_REQUEST';
export const PRODUCT_UPDATE_SUCCESS = 'PRODUCT_UPDATE_SUCCESS';
export const PRODUCT_UPDATE_FAIL = 'PRODUCT_UPDATE_FAIL';

export function updateProduct(product) {
  product.price = parseFloat(product.price) || 0;
  // return {
  //   type: PRODUCT_UPDATE,
  //   payload: product,
  // };

  return (dispatch) => {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    return axios
      .put(`${API_URL}/products/${product.id}`, product)
      .then((result) => {
        dispatch({
          type: PRODUCT_UPDATE_SUCCESS,
          payload: result.data,
        });
      })
      .catch(() => {
        dispatch({
          type: PRODUCT_UPDATE_FAIL,
        });
      });
  };
}

// export const PRODUCT_DELETE = 'PRODUCT_DELETE';
export const PRODUCT_DELETE_REQUEST = 'PRODUCT_DELETE_REQUEST';
export const PRODUCT_DELETE_SUCCESS = 'PRODUCT_DELETE_SUCCESS';
export const PRODUCT_DELETE_FAIL = 'PRODUCT_DELETE_FAIL';

export function deleteProduct(product) {
  // return {
  //   type: PRODUCT_DELETE,
  //   payload: product,
  // };
  return (dispatch) => {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    return axios
      .delete(`${API_URL}/products/${product.id}`)
      .then((result) => {
        dispatch({
          type: PRODUCT_DELETE_SUCCESS,
          payload: result.data,
        });
      })
      .catch(() => {
        dispatch({
          type: PRODUCT_DELETE_FAIL,
        });
      });
  };
}

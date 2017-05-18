import {
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_SUCCESS,

  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_SUCCESS,

  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_SUCCESS,

  PRODUCTS_FETCH_REQUEST,
  PRODUCTS_FETCH_FAIL,
  PRODUCTS_FETCH_SUCCESS,
} from '../actions/products';


const initialState = {
  isLoading: false,
  products: {},
};

function productsReducer(state = initialState, action) {

  if (action.type === PRODUCTS_FETCH_REQUEST
    || action.type === PRODUCT_DELETE_REQUEST
    || action.type === PRODUCT_ADD_REQUEST
    || action.type === PRODUCT_UPDATE_REQUEST) {
    return Object.assign({}, state, {
      isLoading: true,
    });
  }

  if (action.type === PRODUCTS_FETCH_FAIL
    || action.type === PRODUCT_DELETE_FAIL
    || action.type === PRODUCT_ADD_FAIL
    || action.type === PRODUCT_UPDATE_FAIL) {
    return Object.assign({}, state, {
      isLoading: false,
      errorMessage: 'Request failed!!!',
    });
  }

  if (action.type === PRODUCTS_FETCH_SUCCESS) {
    return Object.assign({}, state, {
      isLoading: false,
      products: Object.assign({}, action.payload),
    });
  }

  if (action.type === PRODUCT_ADD_SUCCESS) {
    return Object.assign({}, state, {
      products: Object.assign({}, state.products, {
        isLoading: false,
        [action.payload.id]: action.payload,
      }),
    });
  }

  if (action.type === PRODUCT_UPDATE_SUCCESS) {
    return Object.assign({}, state, {
      products: Object.assign({}, state.products, {
        isLoading: false,
        [action.payload.id]: action.payload,
      }),
    });
  }

  if (action.type === PRODUCT_DELETE_SUCCESS) {
    const products = state.products;
    delete products[action.payload.id];
    return Object.assign({}, state, {
      isLoading: false,
      products: Object.assign({}, products),
    });
  }

  return state;
}

export default productsReducer;

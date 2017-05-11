import products from '../product-data';
import {
  PRODUCT_ADD,
  PRODUCT_UPDATE,
  PRODUCT_DELETE,
} from '../actions/products';


const initialState = {
  isLoading: false,
  products,
};

function productsReducer(state = initialState, action) {

  if (action.type === PRODUCT_ADD) {
    const newId = Math.random();
    action.payload.id = newId;
    return Object.assign({}, state, {
      products: Object.assign({}, state.products, {
        [newId]: action.payload,
      }),
    });
  }

  if (action.type === PRODUCT_UPDATE) {
    return Object.assign({}, state, {
      products: Object.assign({}, state.products, {
        [action.payload.id]: action.payload,
      }),
    });
  }

  if (action.type === PRODUCT_DELETE) {
    const products = state.products;
    delete products[action.payload.id];
    return Object.assign({}, state, {
      products: Object.assign({}, products),
    });
  }

  return state;
}

export default productsReducer;

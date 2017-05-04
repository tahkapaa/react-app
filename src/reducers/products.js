import products from '../product-data';

const initialState = {
  isLoading: false,
  products,
};

function productsReducer(state = initialState, action) {
  return state;
}

export default productsReducer;

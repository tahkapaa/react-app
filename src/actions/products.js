export const PRODUCT_ADD = 'PRODUCT_ADD';

export function addProduct(product) {
  product.price = parseFloat(product.price) || 0;
  return {
    type: PRODUCT_ADD,
    payload: product,
  };
}

export const PRODUCT_UPDATE = 'PRODUCT_UPDATE';

export function updateProduct(product) {
  product.price = parseFloat(product.price) || 0;
  return {
    type: PRODUCT_UPDATE,
    payload: product,
  };
}

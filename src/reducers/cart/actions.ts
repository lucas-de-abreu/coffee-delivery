import { Product } from './reducer'

export enum ActionTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  DECREASE_QUANTITY = 'DECREASE_QUANTITY',
  INCREASE_QUANTITY = 'INCREASE_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addProductAction(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProductAction(productId: number) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productId,
    },
  }
}

export function decreaseQuantityAction(productId: number) {
  return {
    type: ActionTypes.DECREASE_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function increaseQuantityAction(productId: number) {
  return {
    type: ActionTypes.INCREASE_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}

import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Product {
  id: number
  title: string
  image: string
  price: string
  quantity: number
}

interface CartState {
  products: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        if (
          state.products.find(
            (product) => product.id === action.payload.product.id,
          )
        ) {
          draft.products = state.products.map((product) => {
            if (product.id === action.payload.product.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.product.quantity,
              }
            } else {
              return product
            }
          })
        } else {
          draft.products.push(action.payload.product)
        }
      })
    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.products = state.products.filter(
          (product) => product.id !== action.payload.productId,
        )
      })
    case ActionTypes.DECREASE_QUANTITY:
      return produce(state, (draft) => {
        draft.products = state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return product
          }
        })
      })
    case ActionTypes.INCREASE_QUANTITY:
      return produce(state, (draft) => {
        draft.products = state.products.map((product) => {
          if (product.id === action.payload.productId) {
            return { ...product, quantity: product.quantity + 1 }
          } else {
            return product
          }
        })
      })
    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.products = []
      })
    default:
      return state
  }
}

import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { Coffee } from '../pages/Home/components/CoffeeList/components'
import {
  addProductAction,
  clearCartAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeProductAction,
} from '../reducers/cart/actions'
import { cartReducer, Product } from '../reducers/cart/reducer'

interface AddProductData {
  coffee: Coffee
  quantity: number
}

interface CartContextType {
  products: Product[]
  productQuantity: number
  finalPrice: string
  addProduct: (coffee: AddProductData) => void
  removeProduct: (productId: number) => void
  decreaseQuantity: (productId: number) => void
  increaseQuantity: (productId: number) => void
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      products: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { products } = cartState

  const productQuantity = products.reduce(
    (accumulator, product) => accumulator + product.quantity,
    0,
  )

  const finalPrice = products
    .reduce((accumulator, product) => {
      return (
        accumulator +
        product.quantity * parseFloat(product.price.replace(',', '.'))
      )
    }, 0)
    .toFixed(2)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProduct(data: AddProductData) {
    const newProduct: Product = {
      id: data.coffee.id,
      title: data.coffee.title,
      image: data.coffee.image,
      price: data.coffee.price,
      quantity: data.quantity,
    }

    dispatch(addProductAction(newProduct))
  }

  function removeProduct(productId: number) {
    dispatch(removeProductAction(productId))
  }

  function decreaseQuantity(productId: number) {
    dispatch(decreaseQuantityAction(productId))
  }

  function increaseQuantity(productId: number) {
    dispatch(increaseQuantityAction(productId))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        productQuantity,
        finalPrice,
        addProduct,
        removeProduct,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

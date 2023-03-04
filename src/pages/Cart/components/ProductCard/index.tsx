import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Product } from '../../../../reducers/cart/reducer'
import { Actions, ButtonSmall, CardContainer, Counter, Details } from './styles'

interface CartProductCardProps {
  product: Product
}

export function CartProductCard({ product }: CartProductCardProps) {
  const { removeProduct, decreaseQuantity, increaseQuantity } =
    useContext(CartContext)

  return (
    <CardContainer>
      <div>
        <img src={product.image} alt="" />
        <Details>
          {product.title}
          <Actions>
            <Counter>
              <div
                onClick={() => {
                  if (product.quantity > 1) {
                    decreaseQuantity(product.id)
                  } else {
                    removeProduct(product.id)
                  }
                }}
              >
                <Minus />
              </div>
              <span>{product.quantity}</span>
              <div onClick={() => increaseQuantity(product.id)}>
                <Plus />
              </div>
            </Counter>
            <ButtonSmall onClick={() => removeProduct(product.id)}>
              <Trash weight="bold" size={16} />
              <span>REMOVER</span>
            </ButtonSmall>
          </Actions>
        </Details>
        <div className="price">R$ {product.price}</div>
      </div>
    </CardContainer>
  )
}

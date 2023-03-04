import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../contexts/CartContext'

import {
  CartButton,
  CoffeeCardContainer,
  PriceContainer,
  Subtitle,
  Tag,
  Title,
  Actions,
  Counter,
} from './styles'

export interface Coffee {
  id: number
  image: string
  tags: string[]
  title: string
  subtitle: string
  price: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addProduct } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Title>{coffee.title}</Title>
      <Subtitle>{coffee.subtitle}</Subtitle>

      <PriceContainer>
        <div className="price">
          R$ <span>{coffee.price}</span>
        </div>
        <Actions>
          <Counter>
            <div
              onClick={() =>
                setQuantity((previousQuantity) =>
                  previousQuantity > 1
                    ? previousQuantity - 1
                    : previousQuantity,
                )
              }
            >
              <Minus />
            </div>
            <span>{quantity}</span>
            <div
              onClick={() =>
                setQuantity((previousQuantity) => previousQuantity + 1)
              }
            >
              <Plus />
            </div>
          </Counter>
          <CartButton
            onClick={() => {
              addProduct({ coffee, quantity })
              setQuantity(1)
            }}
          >
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </Actions>
      </PriceContainer>
    </CoffeeCardContainer>
  )
}

import { Counter, HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { productQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/" title="Início">
        <span>
          <img src={logoCoffeeDelivery} alt="" />
        </span>
      </Link>
      <nav>
        <div>
          <MapPin weight="fill" size={22} />
          Imbituba, SC
        </div>
        <NavLink to="/cart" title="Carrinho">
          <ShoppingCart weight="fill" size={22} />
          {productQuantity > 0 && <Counter>{productQuantity}</Counter>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

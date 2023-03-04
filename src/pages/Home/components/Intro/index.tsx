import { IntroContainer, Item, ItemsContainer, TitleContainer } from './styles'

import background from '../../../../assets/background.svg'
import titleImage from '../../../../assets/title-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <img src={background} alt="" />
      <div>
        <div>
          <TitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleContainer>

          <ItemsContainer>
            <Item itemColor="yellowDark">
              <div>
                <ShoppingCart weight="fill" size={16} />
              </div>
              <span>Compra simples e segura</span>
            </Item>
            <Item itemColor="baseText">
              <div>
                <Package weight="fill" size={16} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item itemColor="yellow">
              <div>
                <Timer weight="fill" size={16} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Item>
            <Item itemColor="purple">
              <div>
                <Coffee weight="fill" size={16} />
              </div>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsContainer>
        </div>
        <img src={titleImage} alt="" />
      </div>
    </IntroContainer>
  )
}

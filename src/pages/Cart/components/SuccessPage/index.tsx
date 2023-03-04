import { CoffeeDeliveryFormData } from '../..'
import {
  Data,
  DeliveryInfo,
  IconContainer,
  SuccessContainer,
  TitleContainer,
} from './styles'

import deliveryIllustration from '../../../../assets/delivery-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

interface SuccessPageProps {
  data: CoffeeDeliveryFormData
}

export function SuccessPage({ data }: SuccessPageProps) {
  return (
    <SuccessContainer>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </TitleContainer>
      <div className="infoContainer">
        <DeliveryInfo>
          <Data>
            <IconContainer iconBgColor="purple">
              <MapPin size={16} />
            </IconContainer>
            <div>
              <span>
                Entrega em{' '}
                <b>
                  {data.street}, {data.number}
                </b>
              </span>
              <br />
              <span>
                {data.district} - {data.city}, {data.state}
              </span>
            </div>
          </Data>
          <Data>
            <IconContainer iconBgColor="yellow">
              <Timer size={16} />
            </IconContainer>
            <div>
              <span>Previsão de entrega</span>
              <br />
              <span>
                <b>20 min - 30 min</b>
              </span>
            </div>
          </Data>
          <Data>
            <IconContainer iconBgColor="yellowDark">
              <CurrencyDollar size={16} />
            </IconContainer>
            <div>
              <span>Pagamento na entrega</span>
              <br />
              <span>
                <b>{data.paymentType}</b>
              </span>
            </div>
          </Data>
        </DeliveryInfo>
        <img src={deliveryIllustration} alt="" />
      </div>
    </SuccessContainer>
  )
}

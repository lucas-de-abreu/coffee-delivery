import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartProductCard } from './components/ProductCard'
import {
  Info,
  Button,
  CartContainer,
  CartProducts,
  DeliveryData,
  Divider,
  PricesContainer,
  PaymentType,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { coffeeDeliveryValidationSchema } from './validationSchema'
import { FormProvider, useForm } from 'react-hook-form'
import { DeliveryForm } from './components/DeliveryForm'
import { SuccessPage } from './components/SuccessPage'

export type CoffeeDeliveryFormData = zod.infer<
  typeof coffeeDeliveryValidationSchema
>

export function Cart() {
  const { products, finalPrice, clearCart } = useContext(CartContext)

  const [successData, setSuccessData] = useState<
    CoffeeDeliveryFormData | undefined
  >(undefined)

  const deliveryForm = useForm<CoffeeDeliveryFormData>({
    resolver: zodResolver(coffeeDeliveryValidationSchema),
  })

  const { handleSubmit, reset, setValue, watch } = deliveryForm

  function handleFinishOrder(data: CoffeeDeliveryFormData) {
    clearCart()
    setSuccessData(data)
    reset()
  }

  const paymentType = watch('paymentType')

  return (
    <>
      {(successData && <SuccessPage data={successData} />) || (
        <CartContainer onSubmit={handleSubmit(handleFinishOrder)}>
          <div>
            <DeliveryData iconColor="yellowDark">
              <div className="infoContainer">
                <MapPinLine size={22} />
                <Info>
                  <span className="title">Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </Info>
              </div>
              <FormProvider {...deliveryForm}>
                <DeliveryForm />
              </FormProvider>
            </DeliveryData>
            <DeliveryData iconColor="purple">
              <div className="infoContainer">
                <CurrencyDollar size={22} />
                <Info>
                  <span className="title">Endereço de Entrega</span>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </Info>
              </div>
              <PaymentType>
                <button
                  className={`${
                    paymentType === 'Cartão de Crédito' ? 'active' : ''
                  }`}
                  onClick={() => setValue('paymentType', 'Cartão de Crédito')}
                  type="button"
                >
                  <CreditCard size={16} />
                  <span>CARTÃO DE CRÉDITO</span>
                </button>

                <button
                  className={`${
                    paymentType === 'Cartão de Débito' ? 'active' : ''
                  }`}
                  onClick={() => setValue('paymentType', 'Cartão de Débito')}
                  type="button"
                >
                  <Bank size={16} />
                  <span>CARTÃO DE DÉBITO</span>
                </button>

                <button
                  className={`${paymentType === 'Dinheiro' ? 'active' : ''}`}
                  onClick={() => setValue('paymentType', 'Dinheiro')}
                  type="button"
                >
                  <Money size={16} />
                  <span>DINHEIRO</span>
                </button>
              </PaymentType>
            </DeliveryData>
          </div>
          <CartProducts>
            {(products.length > 0 && (
              <>
                {products.map((product) => (
                  <React.Fragment key={product.id}>
                    <CartProductCard product={product} />
                    <Divider />
                  </React.Fragment>
                ))}
                <PricesContainer>
                  <div>
                    <span>Total de itens</span>
                    <span>R$ {finalPrice.replace('.', ',')}</span>
                  </div>
                  <div>
                    <span>Entrega</span>
                    <span>R$ 3,50</span>
                  </div>

                  <div className="total">
                    <span>Total</span>
                    <span>
                      R${' '}
                      {(Number(finalPrice) + 3.5).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <Button type="submit">CONFIRMAR PEDIDO</Button>
                </PricesContainer>
              </>
            )) || (
              <div className="emptyCart">
                Nenhum item adicionado no carrinho
              </div>
            )}
          </CartProducts>
        </CartContainer>
      )}
    </>
  )
}

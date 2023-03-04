import { DeliveryFormContainer, Input } from './styles'
import { useFormContext } from 'react-hook-form'

export function DeliveryForm() {
  const { register } = useFormContext()

  return (
    <DeliveryFormContainer>
      <div>
        <Input placeholder="CEP" {...register('zipCode')} />
      </div>
      <div>
        <Input placeholder="Rua" {...register('street')} />
      </div>
      <div>
        <Input type="number" placeholder="Número" {...register('number')} />
        <Input placeholder="Complemento" {...register('address')} />
      </div>

      <input type="hidden" {...register('paymentType')} />

      <div>
        <Input placeholder="Bairro" {...register('district')} />
        <Input placeholder="Cidade" {...register('city')} />
        <Input placeholder="UF" {...register('state')} />
      </div>
    </DeliveryFormContainer>
  )
}

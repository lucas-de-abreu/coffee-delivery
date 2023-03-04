import * as zod from 'zod'

export const coffeeDeliveryValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Informe a tarefa'),
  street: zod.string().min(1, 'Informe a tarefa'),
  number: zod.string().min(1, 'Informe a tarefa'),
  address: zod.string().min(1, 'Informe a tarefa'),
  district: zod.string().min(1, 'Informe a tarefa'),
  city: zod.string().min(1, 'Informe a tarefa'),
  state: zod.string().min(1, 'Informe a tarefa'),
  paymentType: zod.string().min(1, 'Informe a tarefa'),
})

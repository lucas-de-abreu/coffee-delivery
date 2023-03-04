import { coffeeList } from './coffeeList'
import { CoffeeCard } from './components'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos Cafés</h2>

      <div>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </CoffeeListContainer>
  )
}

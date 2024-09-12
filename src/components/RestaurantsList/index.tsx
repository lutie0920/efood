import Restaurants from '../../models/Restaurants'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurant: Restaurants[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurant.map((rest) => (
          <Restaurant
            key={rest.id}
            image={rest.image}
            infos={rest.infos}
            rating={rest.rating}
            name={rest.name}
            description={rest.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList

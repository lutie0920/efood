import { Restaurantes } from '../../pages/Home'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurantes: Restaurantes[]
}

const ProductsList = ({ restaurantes }: Props) => {
  const getRestaurantesTags = (restaurantes: Restaurantes) => {
    const tags = []
    if (restaurantes.destacado) {
      tags.push('Destaque')
    }
    return tags
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes.map((rest) => (
            <Restaurant
              key={rest.id}
              image={rest.capa}
              infos={getRestaurantesTags(rest)}
              type={rest.tipo}
              rating={rest.avaliacao}
              name={rest.titulo}
              description={rest.descricao}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList

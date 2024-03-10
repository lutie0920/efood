import Loja from '../../models/Loja'
import Restaurante from '../Restaurante'

import { Container, List } from './styles'

export type Props = {
  lojas: Loja[]
}

const RestauranteList = ({ lojas }: Props) => (
  <Container>
    <List>
      {lojas.map((loja) => (
        <Restaurante
          key={loja.id}
          image={loja.image}
          name={loja.name}
          avaliacao={loja.avaliacao}
          description={loja.description}
          infos={loja.infos}
          estrela={loja.estrela}
        />
      ))}
    </List>
  </Container>
)

export default RestauranteList

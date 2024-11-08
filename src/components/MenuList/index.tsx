import Menu from '../Menu'

import { Container, List } from './styles'
import { Restaurantes } from '../../pages/Home'

export type Props = {
  menu: Restaurantes[]
}

const MenuList = ({ menu }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {Array.isArray(menu) &&
            menu?.map((menu) => (
              <Menu
                key={menu.cardapio.id}
                image={menu.cardapio.foto}
                name={menu.cardapio.nome}
                description={menu.cardapio.descricao}
                porcao={menu.cardapio.porcao}
                id={menu.cardapio.id}
                preco={menu.cardapio.preco}
              />
            ))}
        </List>
      </div>
    </Container>
  )
}

export default MenuList

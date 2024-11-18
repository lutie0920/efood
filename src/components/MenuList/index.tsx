import Menu from '../Menu'

import { Container, List } from './styles'
import { Cardapio } from '../../pages/Home'

export type Props = {
  menu: Cardapio[]
}

const MenuList = ({ menu }: Props) => {
  console.log(menu)
  return (
    <Container>
      <div className="container">
        <List>
          {menu.map((menu) => (
            <Menu
              key={menu.id}
              image={menu.foto}
              name={menu.nome}
              description={menu.descricao}
              porcao={menu.porcao}
              id={menu.id}
              preco={menu.preco}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default MenuList

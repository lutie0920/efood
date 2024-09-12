import Cardapio from '../../models/Cardapio'
import Menu from '../Menu'

import { Container, List } from './styles'

export type Props = {
  menu: Cardapio[]
}

const MenuList = ({ menu }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menu.map((menu) => (
          <Menu
            key={menu.id}
            image={menu.image}
            name={menu.name}
            description={menu.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default MenuList

import { useEffect, useState } from 'react'
import { Cardapio, Restaurantes } from '../../pages/Home'
import Menu from '../Menu'

import { Container, List } from './styles'

export type Props = {
  menu: Cardapio[]
}

const MenuList = ({ menu }: Props) => {
  const [cardapio, setCardapio] = useState()

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

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
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default MenuList

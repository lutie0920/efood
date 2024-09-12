import { Card, Descricao, Titulo, Image } from './styles'

import Button from '../Button'

type Props = {
  name: string
  description: string
  image: string
}

const Menu = ({ name, description, image }: Props) => (
  <Card>
    <Image src={image} />
    <Titulo>{name}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/" title="sobre o cardápio">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default Menu

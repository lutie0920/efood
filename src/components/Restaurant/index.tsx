import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Image } from './styles'

import estrela from '../../assets/images/estrela.png'
import Button from '../Button'

type Props = {
  name: string
  rating: string
  infos: string[]
  description: string
  image: string
}

const Restaurant = ({ name, infos, rating, description, image }: Props) => (
  <Card>
    <Image src={image} />
    <Infos>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    </Infos>
    <Titulo>
      {name}
      <span>
        {rating}
        <img src={estrela} />
      </span>
    </Titulo>
    <Descricao>{description}</Descricao>
    <Button
      type="link"
      to="/Perfil"
      title="clique aqui para mais informações do restaurante"
    >
      Saiba mais
    </Button>
  </Card>
)

export default Restaurant

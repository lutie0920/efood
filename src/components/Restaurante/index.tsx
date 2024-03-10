import Button from '../Button'
import Tag from '../Tag'

import {
  Card,
  Descricao,
  Titulo,
  Avaliacao,
  Apresentacao,
  Infos,
  EstrelaImg
} from './styles'

type Props = {
  image: string
  name: string
  avaliacao: string
  description: string
  infos: string[]
  estrela: string
}

const Restaurante = ({
  image,
  name,
  avaliacao,
  description,
  infos,
  estrela
}: Props) => (
  <Card>
    <img src={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Apresentacao>
      <Titulo>
        {name}
        <Avaliacao>
          {avaliacao}
          <EstrelaImg src={estrela} />
        </Avaliacao>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Button to="/menu">Saiba mais</Button>
    </Apresentacao>
  </Card>
)

export default Restaurante

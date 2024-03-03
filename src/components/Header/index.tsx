import { Imagem, Div, Logo, Titulo } from './styles'

import BackImg from '../../assets/images/papel_parede.png'
import LogoImg from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${BackImg})` }}>
    <Div>
      <Logo src={LogoImg} />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </Div>
  </Imagem>
)

export default Header

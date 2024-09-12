import { Header, Title } from './styles'

import fundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <Title>
      <img src={logo} />
      <h1>
        Viva experiências gastronômicas<br></br>
        no conforto da sua casa
      </h1>
    </Title>
  </Header>
)

export default Hero

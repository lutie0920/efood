import { Container, FootSection, Link, Links } from './styled'
import logo from '../../assets/images/logo.svg'
import instagram from '../../assets/images/instagram.jpg'
import facebook from '../../assets/images/facebook.jpg'
import twitter from '../../assets/images/twitter.jpg'

const Footer = () => (
  <Container>
    <FootSection>
      <img src={logo} alt="Logo do efood" />
    </FootSection>
    <FootSection>
      <Links>
        <li>
          <Link>
            <img src={instagram} alt="Logo do instagram" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={facebook} alt="Logo do facebook" />
          </Link>
        </li>
        <li>
          <Link>
            <img src={twitter} alt="Logo do twitter" />
          </Link>
        </li>
      </Links>
    </FootSection>
    <FootSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade<br></br> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FootSection>
  </Container>
)

export default Footer

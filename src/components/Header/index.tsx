import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkCart, Imagem } from './styles'

import fundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import fundoPasta from '../../assets/images/fundoPasta.svg'

const Header = () => (
  <header>
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <Links>
        <li>
          <Link to="/">Restaurantes</Link>
        </li>
      </Links>
      <img src={logo} alt="EFOOD" />
      <LinkCart href="#">0 produto(s) no carrinho</LinkCart>
    </HeaderBar>
    <Imagem style={{ backgroundImage: `url(${fundoPasta})` }}>
      <h2>Italiana</h2>
      <p>La Dolce Vita Trattoria</p>
    </Imagem>
  </header>
)

export default Header

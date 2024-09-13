import { Link } from 'react-router-dom'
import { HeaderBar, Imagem, DivLink } from './styles'

import fundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import fundoPasta from '../../assets/images/fundoPasta.svg'

const Header = () => (
  <header>
    <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
      <DivLink className="container">
        <ul>
          <Link to="/">Restaurantes</Link>
        </ul>
        <img src={logo} alt="EFOOD" />
        <Link to="#">0 produto(s) no carrinho</Link>
      </DivLink>
    </HeaderBar>
    <Imagem style={{ backgroundImage: `url(${fundoPasta})` }}>
      <div className="container">
        <h2>Italiana</h2>
        <p>La Dolce Vita Trattoria</p>
      </div>
    </Imagem>
  </header>
)

export default Header

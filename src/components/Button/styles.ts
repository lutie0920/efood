import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Cores } from '../../styles'

export const ButtonLink = styled(Link)`
  background-color: ${Cores.rosa};
  color: ${Cores.branco};
  font-size: 14px;
  font-weight: 700;
  padding: 8px 12px;
  text-decoration: none;
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: none;
  color: #ffebd9;
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
`

export const ButtonLink = styled(Link)`
  border: none;
  color: #ffebd9;
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`

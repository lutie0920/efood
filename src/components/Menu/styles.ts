import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: #ffebd9;

  ${ButtonLink} {
    width: 304px;
    height: 24px;
    color: ${cores.rosa};
    background: #ffebd9;
    justify-content: center;
    display: flex;
    margin-top: 4px;
    margin-left: 8px;
  }
`
export const Image = styled.img`
  width: 304px;
  height: 167px;
  margin-top: 8px;
  margin-left: 8px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  line-height: 22px;
`

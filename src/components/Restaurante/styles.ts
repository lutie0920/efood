import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  max-width: 472px;
  height: 400px;
  display: block;
  position: relative;
  border: solid 1px ${Cores.rosa};
`

export const Apresentacao = styled.div`
  margin-left: 8px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Avaliacao = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 0 auto;
  diplay: inline-block;
  float: right;
  margin-right: 8px;
`

export const EstrelaImg = styled.img`
  margin-left: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 18px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

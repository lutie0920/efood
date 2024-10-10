import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../../components/Button/styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding-left: 32px;
  padding-bottom: 32px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  div {
    margin-left: 24px;
    margin-top: 32px;

    h4 {
      font-size: 18px;
      font-weight: 900;
    }

    p {
      width: 656px;
      margin-top: 16px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      font-family: Roboto;
      line-height: 22px;
    }

    ${ButtonLink} {
      margin-top: 16px;
      color: ${cores.rosa};
      background-color: ${cores.bege};
    }
  }
`

export const ImgPizza = styled.img`
  width: 280px;
  height: 280px;
  margin-top: 32px;
  object-fit: cover;
`

export const ImgClose = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 8px;
  margin-right: 8px;
`

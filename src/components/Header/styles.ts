import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
// import fundoRestaurante from '../../assets/images/imagem_1_fundo.png'

import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.primariaClara1};
  background-image: url(${fundo});
  width: 100%;
  /* height: 384px; */
  padding: 40px;
  display: flex;
  gap: 16px;

  /* justify-content: space-between; */
  @media (max-width: ${breakpoints.desktop}) {
    padding: 16px 16px;
  }

  a,
  p {
    text-decoration: none;
    color: ${cores.primaria};
    font-size: 18px;
    font-weight: 900;
  }

  .container {
    display: flex;
    gap: 16px;
    flex-direction: column;
    /* align-content: space-between; */
    justify-content: space-between;
    /* align-items: center; */
    height: 100%;
    width: 100%;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }
  }

  h1 {
    margin: 0 auto;
  }

  h1,
  nav,
  p {
    display: flex;
    justify-content: center;
  }

  h2 {
    font-size: 36px;
    font-weight: 900;
    text-align: center;
    max-width: 560px;
    width: 100%;
    align-self: center;
    margin-top: 140px;

    @media (max-width: 1024px) {
      font-size: 18px;
      margin-top: 40px;
    }
  }

  .antecede {
    order: -1;
  }

  .distribute {
    width: 100%;
    display: flex;
    /* align-items: center; */
  }

  .flex-start {
    justify-content: flex-start;
    @media (max-width: ${breakpoints.desktop}) {
      justify-content: center;
    }
  }

  .flex-end {
    justify-content: flex-end;
    @media (max-width: ${breakpoints.desktop}) {
      justify-content: center;
    }
  }
`

export const Topo = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 16px;
  }
`

export const CartButton = styled.button`
  color: ${cores.primaria};
  font-size: 18px;
  font-weight: 900;
  background: none;
  border: none;
  cursor: pointer;
`

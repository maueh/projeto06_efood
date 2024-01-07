import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'
import fundoRestaurante from '../../assets/images/imagem_1_fundo.png'

import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.primariaClara1};
  background-image: url(${fundo});
  background-size: cover;
  width: 100%;
  /* height: 384px; */
  padding: 40px;
  display: flex;
  gap: 16px;
  /* justify-content: space-between; */
  @media (max-width: 1024px) {
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
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    /* align-items: center; */
    height: 100%;
    width: 100%;
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
`

export const Topo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 16px;
  }
`

export const CabecalhoRestaurante = styled.div`
  background-color: aliceblue;
  /* background-image: url(${fundoRestaurante}); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  padding-top: 25px;
  padding-bottom: 32px;
  font-weight: 100;
  color: ${cores.branca};

  div {
    font-size: 32px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    @media (max-width: 1024px) {
      margin-top: 40px;
    }
  }
  @media (max-width: 1024px) {
    padding-left: 16px;
    padding-right: 16px;
    height: auto;
  }
`

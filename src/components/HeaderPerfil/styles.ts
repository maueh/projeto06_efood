import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const CabecalhoRestaurante = styled.div`
  background-color: aliceblue;
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
  position: relative;

  div {
    font-size: 32px;
  }

  .container {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    z-index: 1;

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 96%;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 32px;
    @media (max-width: ${breakpoints.desktop}) {
      margin-top: 40px;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.67);
    content: '';
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding-left: 16px;
    padding-right: 16px;
    height: auto;
  }
`

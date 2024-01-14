import { createGlobalStyle } from 'styled-components'

export enum TextCase {
  'capitalize'
}

export const cores = {
  branca: '#FFF',
  primaria: '#E66767',
  primariaClara1: '#FFEBD9',
  primariaClara2: '#FFF8F2',
  amarela: '#FFB930',
  cinzaEscuro: '#4B4B4B'
  // preta: '#111',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    &:not(dialog) {
    margin: 0;
    padding: 0;
    }
  }

  body {
    background-color: ${cores.primariaClara2};
    color: ${cores.primaria};
    font-size: 10px;

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    /* padding-left: 24px;
    padding-right: 24px; */

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 96%;
    }
  }

  .container-dialog{
    max-width: 1024px;
    width: 100%;
  }

  .capitalize {
  text-transform: capitalize;
  }

  .loading{
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .upperWrapper{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  label {
    font-weight: 700;
    font-size: 14px;
    display: flex;
    color: ${cores.primariaClara1};
  }

  input {
    font-weight: 700;
    font-size: 14px;
    border: 1px solid ${cores.primariaClara1};
    background-color: ${cores.primariaClara1};
    padding: 8px;
    color: ${cores.cinzaEscuro};
  }
`

import { createGlobalStyle } from 'styled-components'

export enum TextCase {
  'capitalize'
}

export const colors = {
  white: '#FFF',
  primary: '#E66767',
  lightPrimary_1: '#FFEBD9',
  lightPrimary_2: '#FFF8F2',
  yellow: '#FFB930',
  mediumGrey: '#4B4B4B',
  lightGrey_1: '#9c9c9c',
  lightGrey_2: '#ccc'
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
    background-color: ${colors.lightPrimary_2};
    color: ${colors.primary};
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
    color: ${colors.lightPrimary_1};
  }

  input {
    font-weight: 700;
    font-size: 14px;
    border: 1px solid ${colors.lightPrimary_1};
    background-color: ${colors.lightPrimary_1};
    padding: 8px;
    color: ${colors.mediumGrey};
  }
`

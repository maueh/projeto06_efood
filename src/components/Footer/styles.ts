import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.primariaClara1};
  width: 100%;
  height: 298px;
  padding: 40px;
  font-size: 10px;
  text-align: center;

  p {
    max-width: 480px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`

export const SocialLinks = styled.ul`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

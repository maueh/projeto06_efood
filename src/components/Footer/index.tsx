import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { HeaderContainer, SocialLinks } from './styles'

const Footer = () => (
  <HeaderContainer>
    <div className="container">
      <div>
        <img src={logo} alt="eFood" />
        <SocialLinks>
          <li>
            <a href="#">
              <img src={instagram} alt="Ir para Instagram de eFood" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="Ir para Facebook de eFood" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="Ir para Twitter de eFood" />
            </a>
          </li>
        </SocialLinks>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </HeaderContainer>
)

export default Footer

import Rotas from './routes'
import Header from './components/Header'

import { EstiloGlobal } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App

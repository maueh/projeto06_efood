import Rotas from './routes'
import Header from './components/Header'

import { EstiloGlobal } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <EstiloGlobal />
      <div className="wrapper">
        <Header />
        <main>
          <Rotas />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Header from './components/Header'

import { EstiloGlobal } from './styles'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <div className="wrapper">
          <Header />
          <main>
            <Rotas />
          </main>
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App

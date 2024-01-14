import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Header from './components/Header'

import { EstiloGlobal } from './styles'
import Footer from './components/Footer'
import { store } from './store'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <EstiloGlobal />
        <div className="wrapper">
          <div className="upperWrapper">
            <Header />
            <main>
              <Rotas />
            </main>
          </div>
          <Footer />
          <Sidebar />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App

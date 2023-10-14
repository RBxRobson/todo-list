import { Provider } from 'react-redux'
//* Importando os arquivos do react router DOM *\\
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//* Com o creteBrowserRouter conseguimos configurar as paginas e todo roteamento da aplicação *\\
//* Já o RouterProvider é o componente que irá gerenciar tudo *\\

import EstiloGLobal, { Container } from './styles'

import store from './store'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    //* Caminho inicial *\\
    path: '/',
    //* Elemento a ser renderizado *\\
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    //* Usando o provider para fazer a conexão entre o react e o nosso estado
    //* gerenciado pelo redux, nele devemos passar como props nossa store
    <Provider store={store}>
      <EstiloGLobal />
      <Container>
        {/* //* Chamando nosso componente que contém nossas rotas
         */}
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import EstiloGLobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    //* Usando o provider para fazer a conexão entre o react e o nosso estado
    //* gerenciado pelo redux, nele devemos passar como props nossa store
    <Provider store={store}>
      <EstiloGLobal />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App

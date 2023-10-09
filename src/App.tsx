import SideBar from './containers/SideBar'
import TodoList from './containers/TodoList'
import EstiloGLobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGLobal />
      <Container>
        <SideBar />
        <TodoList />
      </Container>
    </>
  )
}

export default App

import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const TodoList = () => (
  <Container>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <ul>
      <li>
        <Tarefa />
        <Tarefa />
        <Tarefa />
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default TodoList

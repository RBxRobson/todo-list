import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './style'

//* Importando enums *\\
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

//! Esse conteúdo está sendo preenchido via construtor !\\
//* Const para simularmos nosso conteúdo *\\
//? const tarefas = [
//?   {
//?     titulo: 'Estudar typescript',
//?     descricao: 'Ver aula 3 da EBAC',
//?     prioridade: enums.Prioridade.IMPORTANTE,
//?     status: enums.Status.PENDENTE
//?   },
//?   {
//?     titulo: 'Estudar React',
//?     descricao: 'Ver aula 4 da EBAC',
//?     prioridade: enums.Prioridade.URGENTE,
//?     status: enums.Status.CONCLUIDA
//?   },
//?   {
//?     titulo: 'Estudar Sass',
//?     descricao: 'Ver aula 1 da EBAC',
//?     prioridade: enums.Prioridade.IMPORTANTE,
//?     status: enums.Status.PENDENTE
//?   }
//? ]

const TodoList = () => {
  //* Usando o useSelector importamos nosso reducer Tarefas,
  //* além disso desestruturamos para acessar diretamente 'tarefas',
  //* assim sendo necessário apenas passar o state.
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ul>
        {/*
        //* Percorrendo os itens do nosso array de objetos com o map, após isso acessamos
        //* a nossa tarefa(t) e em cada componente de tarefa passamos as props com os dados que
        //* devem ser preenchidos, acessamos tarefas, colocamos o .
        //* após isso a propriedade do objeto que deve ser acessada
      */}
        {tarefas.map((t) => (
          <li key={t.titulo}>
            {/*
            //* Usando o Key para o react identificar quais elementos sofreram uma mudança
            //* na lista, ou seja cada li deve receber uma key única, desse modo
            //* o react consegue entender qual elemento sofreu a mudança a partir dessa key,
            //* no caso do exemplo será o titulo da tarefa.
          */}
            <Tarefa
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList

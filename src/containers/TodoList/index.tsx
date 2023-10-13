import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { Container } from './style'

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
  //* Usando o useSelector importamos nosso reducers,
  //* além disso o desestruturamos para acessar a props desejada,
  //* assim sendo necessário apenas passar o state.(nome do reducer).
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  //* Essa função tem o objetivo de filtrar os itens então ela procura
  //* com o search os titulos que contenham o termo, caso não conter o termo
  //* index -1, ela não será retorna nada
  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      //* Se termo não for undefined acessamos tarefasFiltradas e filtramos
      tarefasFiltradas = tarefasFiltradas.filter(
        //* Agora aplicando o filtro, buscamos os títulos com o search que existam no termo
        //* se o retorno disso for menor que 0 (-1) significa que não temos esse termo
        //* então nada será exibido, para tudo funcionar passamos tanto o termo quanto o titulo
        //* para minusculo com a função toLowerCase, assim irá encontrar o item mesmo
        //* com diferença entre carácter maiúsculo ou minusculo.
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      //* Caso criterio for prioridade, então vamos retornar as tarefas
      //* com prioridade === a valor
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
        //* Caso criterio for status, então vamos retornar as tarefas
        //* com status === a valor
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      //* Agora basta retornar nosso array filtrado
      return tarefasFiltradas

      //* Caso termo for undefined iremos retornar todos os itens *\\
    } else {
      return itens
    }
  }

  return (
    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ul>
        {/*
        //* Percorrendo os itens do nosso array de objetos com o map, após isso acessamos
        //* a nossa tarefa(t) e em cada componente de tarefa passamos as props com os dados que
        //* devem ser preenchidos, acessamos tarefas, colocamos o .
        //* após isso a propriedade do objeto que deve ser acessada
      */}
        {filtraTarefas().map((t) => (
          <li key={t.titulo}>
            {/*
            //* Usando o Key para o react identificar quais elementos sofreram uma mudança
            //* na lista, ou seja cada li deve receber uma key única, desse modo
            //* o react consegue entender qual elemento sofreu a mudança a partir dessa key,
            //* no caso do exemplo será o titulo da tarefa.
          */}
            <Tarefa
              id={t.id}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              descricao={t.descricao}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default TodoList

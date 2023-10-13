import { useDispatch, useSelector } from 'react-redux'

//* Importando todos os estilos do style com asterisco *\\
import * as S from './style'

import * as enums from '../../utils/enums/Tarefa'
import { alteraFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

//* Criando nossa Props *\\
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

//* Desestruturando a props e passando os valores *\\
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  //* Precisamos do dispatch para invocar uma função que altera o estado *\\
  const dispatch = useDispatch()

  //* Usando o useSelector para acessar o nosso state e pegar nossos reducers *\\
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    //* O criterio e valor dentro de filtro devem ser iguais ao criterio e valor
    //* passados pelas props a partir do escolhido pelo usuário
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    //* Agora vamos avaliar oq as duas const retornam
    //* para o retorno ser true as duas devem ser true,
    //* caso apenas um ou os dois sejam false, teremos o retorno como false
    return mesmoCriterio && mesmoValor
  }
  //* Agora basta armazenar o retorno em uma constante, assim fica mais elegante
  const active = verificaEstaAtivo()

  //* A função filtrar chama o dispatch para alterar o estado, então o dispatch chama
  //* a função alteraFiltro que acessa o criterio e valor
  const filtrar = () => {
    dispatch(
      alteraFiltro({
        criterio,
        valor
      })
    )
  }

  //* Criando a função que irá contar quantas tarefas existem para cada criterio *\\
  const contarTarefas = () => {
    //! Para fazer a contagem usamos o length !\\
    //* Se o criterio for todas, iremos retornar todas as tarefas *\\
    if (criterio === 'todas') return tarefas.itens.length
    //* Se o criterio for prioridade, iremos filtrar para retornar de acordo com a prioridade *\\
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    //* Se o criterio for status, iremos filtrar para retornar de acordo com o status *\\
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }
  //* Agora basta armazenar o retorno em uma constante, assim fica mais elegante
  const contador = contarTarefas()

  return (
    //* As props passadas aqui terão seu valor implementado na sidebar *\\
    <S.Card active={active} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard

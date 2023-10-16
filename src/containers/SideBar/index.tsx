import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as S from './style'
import * as enums from '../../utils/enums/Tarefa'
import { Button, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  //* Precisamos do dispatch para invocar uma função que altera o estado *\\
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {/*//* Se mostrarFiltros for true iremos exibir os filtros,
        //*    caso for false será exibido um button */}
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              //* Passamos o termo como valor do campo *\\
              value={termo}
              //* Ativamos o onChange para alterar o valor do termo e a filtragem funcionar *\\
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              {/* //* Cada card dos filtros tem seus valores, passamos eles com props */}
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          //* Usando o navigate passamos para o onClick o redirecionamento para rota desejada
          <Button onClick={() => navigate('/')} type="button">
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
export default SideBar

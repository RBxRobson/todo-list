import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './style'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const SideBar = () => {
  //* PRecisamos do dispatch para invocar uma função que altera o estado *\\
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          //* Passamos o termo como valor do campo *\\
          value={termo}
          //* Ativamos o onChange para alterar o valor do termo e a filtragem funcionar *\\
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={2} />
          <FiltroCard legenda="concluidas" contador={3} />
          <FiltroCard legenda="urgentes" contador={4} />
          <FiltroCard legenda="importantes" contador={1} />
          <FiltroCard legenda="normal" contador={3} />
          <FiltroCard legenda="todas" contador={5} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default SideBar

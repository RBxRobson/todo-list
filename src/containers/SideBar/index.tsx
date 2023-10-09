import FiltroCard from '../../components/FiltroCard'

import * as S from './style'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default SideBar

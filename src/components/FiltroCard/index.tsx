//* Importando todos os estilos do style com asterisco *\\
import * as S from './style'

//* Criando nossa Props *\\
export type Props = {
  active?: boolean
  contador: number
  legenda: string
}

//* Desestruturando a props e passando os valores *\\
const FiltroCard = ({ active, contador, legenda }: Props) => (
  //* As props passadas aqui terão seu valor implementado na sidebar *\\
  <S.Card active={active}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{legenda}</S.Label>
  </S.Card>
)

export default FiltroCard

import * as S from './style'

//* Criando o componente que irá conter a tarefa e as suas opções *\\
const Tarefa = () => (
  <S.Card>
    <S.Title>Nome task</S.Title>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Button>editar</S.Button>
      <S.Button>remover</S.Button>
    </S.ActionBar>
  </S.Card>
)

export default Tarefa

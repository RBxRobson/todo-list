import { useState } from 'react'
import * as S from './style'

//* Importando enums *\\
import * as enums from '../../utils/enums/Tarefa'

//* Criando nossa Props e sua tipagem *\\
type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

//* Criando o componente que irá conter a tarefa e as suas opções,
//* e passando as props desestruturadas
const Tarefa = ({ descricao, titulo, prioridade, status }: Props) => {
  //* Usando o useState para poder mudar o estado dos botões *\\
  const [estaEditando, setEstaEditando] = useState(false)
  //* Vamos usar o estado estaEditando para mudar os botões quando o usuário,
  //* estiver editando sua task

  return (
    <S.Card>
      {/* //* Passando nossas props para os elementos de texto  */}
      <S.Title>{titulo}</S.Title>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      {/* //* Passando nossa props */}
      <S.Description value={descricao} />
      <S.ActionBar>
        {/* //* Fazendo um if com o uso do ? e :, para quando o estado estaEditando for True ?
        //* ele irá retornar os botões Salvar e Cacelar, caso for false :, ele irá retornar
        //* Editar e Remover */}
        {estaEditando ? (
          <>
            <S.SaveBtn>Salvar</S.SaveBtn>
            {/* //* onClick passando o setEstaEditando para alterar o estaEditando para false */}
            <S.DeleteBtn onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.DeleteBtn>
          </>
        ) : (
          <>
            {/* //* onClick passando o setEstaEditando para alterar o estaEditando para true */}
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            <S.DeleteBtn>Remover</S.DeleteBtn>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa

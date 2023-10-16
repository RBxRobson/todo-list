import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './style'

//* Importando enums *\\
import * as enums from '../../utils/enums/Tarefa'

import { remove, save } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'
import { SaveBtn } from '../../styles'

//* Criando nossa Props e sua tipagem, como ja temos a tipagem
//* na nossa classe com o construtor reutilizamos essa tipagem*\\
type Props = TarefaClass

//* Criando o componente que irá conter a tarefa e as suas opções,
//* e passando as props desestruturadas
const Tarefa = ({
  descricao: descricaoOriginal,
  titulo,
  prioridade,
  status,
  id
}: Props) => {
  //* O dispatch invoca uma função que altera o estado *\\
  const dispatch = useDispatch()

  //* Usando o useState para poder mudar o estado dos botões *\\
  const [estaEditando, setEstaEditando] = useState(false)
  //* Vamos usar o estado estaEditando para mudar os botões quando o usuário,
  //* estiver editando sua task

  //* Criando o estado que armazena os valores digitados na tarefa *\\
  const [descricao, setDescricao] = useState('')

  //* Usando o useEffect para observar as mudanças na descrição
  useEffect(() => {
    //* Se descrição tiver algum valor ele será implementado no state que criamos antes *\\
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    //* onClick passando setEstaEditando alterando o estaEditando para false
    setEstaEditando(false)
    //* onClick passando setDescricao alterando o state para a forma original
    //* assim cancelando a alteração que estava sendo feita no textarea
    setDescricao(descricaoOriginal)
  }

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
      {/* //* Passando nossa props e o onChange para alterar o valor */}
      <S.Description
        //* desabilitamos o textarea para quando estaEditando for false
        disabled={!estaEditando}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <S.ActionBar>
        {/* //* Fazendo um if com o uso do ? e :, para quando o estado estaEditando for True ?
        //* ele irá retornar os botões Salvar e Cacelar, caso for false :, ele irá retornar
        //* Editar e Remover */}
        {estaEditando ? (
          <>
            <SaveBtn
              onClick={() => {
                {
                  //* O Save irá salvar a tarefa de acordo com o id da mesma
                  //* além disso ele atualiza os valores da tarefa
                }
                dispatch(save({ id, titulo, prioridade, status, descricao }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </SaveBtn>
            <S.DeleteBtn onClick={() => cancelarEdicao}>Cancelar</S.DeleteBtn>
          </>
        ) : (
          <>
            {/* //* onClick passando o setEstaEditando para alterar o estaEditando para true */}
            <S.Button onClick={() => setEstaEditando(true)}>Editar</S.Button>
            {/* //* O remove irá remover a tarefa de acordo com o id da mesma */}
            <S.DeleteBtn onClick={() => dispatch(remove(id))}>
              Remover
            </S.DeleteBtn>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Tarefa

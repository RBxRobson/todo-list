import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { MainContainer, SaveBtn, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './style'
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  //* Precisamos do dispatch para invocar uma função que altera o estado *\\
  const dispatch = useDispatch()
  //* Para navegar entre as rotas da nossa aplicação podemos usar o useNavigate *\\
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  //* criando a função que irá adicionar uma nova tarefa *\\
  const cadastrarTarefa = (evento: FormEvent) => {
    //* desativando o evento de recarregar a pagina *\\
    evento.preventDefault()
    //* Aqui passamos as propriedades necessária para a criação da nossa tarefa *\\
    const tarefaParaAdicionar = new Tarefa(
      9,
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao
    )

    //* Usamos o dispatch para chamar nossa action cadastrar, que irá verificar se existe um titulo
    //* já cadastrado igual ao passado no input, se houver emite um alerta, caso contrário fará
    //* um push, com as informações contidas na nova tarefa criada dentro da const tarefaParaAdicionar
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo> Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          //* Usamos o value para o react entender que esse campo deve ser controlado(acompanhado)
          value={titulo}
          //* Passamos o setTitulo para atualizar nosso estado de acordo com a mudança no input
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          as="textarea"
          //* Usamos o value para o react entender que esse campo deve ser controlado(acompanhado)
          value={descricao}
          //* Passamos o setTitulo para atualizar nosso estado de acordo com a mudança no input
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          {/* //* Object value retorna um array, nesse caso pedimos o retorno de um
          //* array aonde terá as prioridades contidas no nosso enum, após isso
          //* faremos um map nesse array, usando cada prioridade para criar
          //* nossa checkbox de maneira dinâmica */}
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                }
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <SaveBtn type="submit">Cadastrar</SaveBtn>
      </Form>
    </MainContainer>
  )
}

export default Formulario

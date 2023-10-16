import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

//* Criando nosso slice Tarefas (pedaço de estado) *\\
const tarefasSlice = createSlice({
  name: 'Tarefas',
  initialState: {
    itens: [
      //* Como agora temos um construtor nao precisamos criar o objeto todo,
      //* apenas passamos os argumentos que devem ser preenchidos na nova tarefa
      new Tarefa(
        //* Lembre-se da ordem de argumentos passadas no construtor de tarefas
        //* id | titulo | prioridade | status | descricao
        1,
        'Estudar JS',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTE,
        ''
      ),
      new Tarefa(
        2,
        'Estudar Bootstrap',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        ''
      ),
      new Tarefa(
        3,
        'Estudar jQuery',
        enums.Prioridade.NORMAL,
        enums.Status.PENDENTE,
        ''
      )
    ]
  },
  reducers: {
    //* Criando a action que remove tarefas *\\
    remove: (state, action: PayloadAction<number>) => {
      //* Acessamos o state, depois os itens e por fim passamos
      //* o filter para remover o id que não esteja na action *\\
      state.itens = state.itens.filter(
        (tarefas) => tarefas.id !== action.payload
      )
    },
    //* Criando a action que salva tarefas *\\
    save: (state, action: PayloadAction<Tarefa>) => {
      //* Criamos uma const, acessamos o state, depois os itens e por fim passamos
      //* o find para encontra a tarefa id que seja igual a action id *\\
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      //* Se o id tiver um valor maior que 0 vamos acessar o state, acessar
      //* os itens, pegar o id e implementa-lo ao action payload
      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    //* Criando a action que cadastra novas tarefas *\\
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      //* Criando uma const que irá acessar nosso estado e pegar o primeiro item que
      //* atender os parâmetros exigidos.
      const tarefaExiste = state.itens.find(
        (tarefa) =>
          //* Se existir uma tarefa no nosso array que tenha o mesmo titulo
          //* da tarefa passada como argumento (action.payload) teremos o retorno de true
          //* caso não existir nosso retorno será false
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )

      //* Se for true o nosso retorno iremos emitir esse alerta
      if (tarefaExiste) {
        alert('Já existe uma tarefa com esse nome')
        //* Caso for false, iremos adicionar a tarefa passada via push
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

//* Agora com o reducer pronto só falta exporta-lo juntamente com action remove *\\
export const { remove, save, cadastrar } = tarefasSlice.actions
export default tarefasSlice.reducer

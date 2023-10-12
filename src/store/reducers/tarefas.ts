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
    }
  }
})

//* Agora com o reducer pronto só falta exporta-lo juntamente com action remove *\\
export const { remove, save } = tarefasSlice.actions
export default tarefasSlice.reducer

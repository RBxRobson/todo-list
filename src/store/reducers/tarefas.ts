import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

//* Criando nosso slice Tarefas (pedaço de estado) *\\
const tarefasSlice = createSlice({
  name: 'Tarefas',
  initialState: [
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
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      //* Usamos o filter para remover o id que não esteja na action *\\
      state = state.filter((tarefas) => tarefas.id !== action.payload)
    }
  }
})

//* Agora com o reducer pronto só falta exporta-lo juntamente com action remove *\\
export const { remove } = tarefasSlice.actions
export default tarefasSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar TS',
      descricao: 'Começar por POO',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 2,
      titulo: 'Estudar ReactJS',
      descricao: 'Começar por useStates',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    },
    {
      id: 3,
      titulo: 'Estudar Redux',
      descricao: 'Começar por entender como funciona a Store',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE
    }
  ]
}

//* Criando nosso slice Tarefas (pedaço de estado) *\\
const tarefasSlice = createSlice({
  name: 'Tarefas',
  initialState,
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
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, 'id'>>) => {
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
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      //* Criamos uma const, acessamos o state, depois os itens e por fim passamos
      //* o find para encontra a tarefa id que seja igual a action id *\\
      const indexTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      //* Se o id tiver um valor maior que 0 vamos acessar o state, acessar
      //* os itens, pegar o id e atualizar o status da tarefa de acordo com o booleano finalizado
      //* se o retorno for true teremos o enum prioridade como concluida, se for false teremos
      //* como pendente
      if (indexTarefa >= 0) {
        state.itens[indexTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

//* Agora com o reducer pronto só falta exporta-lo juntamente com action remove *\\
export const { remove, save, cadastrar, alteraStatus } = tarefasSlice.actions
export default tarefasSlice.reducer

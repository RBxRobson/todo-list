import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Tarefa'

//* Criando a tipagem para o filtro *\\
type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

//* Estado inicial *\\
const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

//* Criando nosso slice para o Filtro *\\
const flitroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    //* Criando uma action para alterar o termo de busca *\\
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    //* Criando uma action para alterar o filtro *\\
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const { alteraTermo, alteraFiltro } = flitroSlice.actions
export default flitroSlice.reducer

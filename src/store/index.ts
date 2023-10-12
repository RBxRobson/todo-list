import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'
//* Criando nossa store para fazer uso do redux *\\
const store = configureStore({
  reducer: {
    //* Deletar tarefas *\\
    tarefas: tarefasReducer,
    //* Filtrar tarefas *\\
    filtro: filtroReducer
  }
})

//* Inferindo o tipo de dados com o returnType
//* pois o useSelector não consegue entender sem esse método
export type RootReducer = ReturnType<typeof store.getState>

export default store

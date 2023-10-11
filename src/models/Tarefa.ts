import * as enums from '../utils/enums/Tarefa'

//* Criando uma classe (lembre-se da orientação a objetos) para
//* fazer um construtor de cada tarefa, além disso tipamos os dados e usamos enums
class Tarefa {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string

  constructor(
    id: number,
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string
  ) {
    //* O this faz referência ao valor dentro da classe, após o igual passamos
    //* o valor atribuído no argumento.
    this.id = id
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
  }
}

//* exportando nossa classe *\\
export default Tarefa

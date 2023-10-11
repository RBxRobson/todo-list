import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

//* Importando enums *\\
import * as enums from '../../utils/enums/Tarefa'
//* Criando nossa tipagem para as tags *\\
type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function returnBackground(props: TagProps): string {
  //* Primeiro verificamos se a props parâmetro é prioridade
  if (props.parametro === 'prioridade') {
    //* Caso seja iremos verificar o valor da props prioridade,
    //* em caso de urgente retornara a cor vermelho
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    //* em caso de importante retornara a cor amarelo2
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.amarelo2
    //* No else abordamos a mesma técnica anterior, porém agora em status
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  //* Caso não tenha nenhum desses valores, vamos retornar a cor cinza.
  return '#ccc'
}

//! Função sem o uso dos enums !\\
//* Nessa função passamos o argumento props tipado, também decretamos que seu retorno
//* deve ser uma string
//? function returnBackground(props: TagProps): string {
//* Primeiro verificamos se em props existe o atributo status
//? if ('status' in props) {
//* Caso exista iremos verificar seu valor,
//* em caso de pendente retornara a cor amarela
//? if (props.status === 'Pendente') return variaveis.amarelo
//* em caso de concluída retornara a cor verde
//? if (props.status === 'Concluída') return variaveis.verde
//* No else if abordamos a mesma técnica anterior
//? } else if ('prioridade' in props) {
//? if (props.prioridade === 'Urgente') return variaveis.vermelho
//? if (props.prioridade === 'Importante') return variaveis.amarelo2
//? }
//* Caso não tenha nenhum desses valores, vamos retornar a cor cinza.
//? return '#ccc'
//? }
//! Função sem o uso dos enums !\\

//* Criando o elemento Card (pai) *\\
export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  border-radius: 16px;
  margin-bottom: 32px;
`

//* Criando o titulo do nosso Card *\\
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
//* Criando as tags do nosso Card e aplicando a tipagem das Props*\\
export const Tag = styled.span<TagProps>`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  //* Como a cor de fundo é interativa passamos uma função que irá determinar
  //* qual será a cor aplicada a tag
  background-color: ${(props) => returnBackground(props)};
  border-radius: 8px;
  margin-right: 16px;
`

//* Criando a descrição do nosso Card *\\
export const Description = styled.textarea`
  display: block;
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

//* Criando nossa barra de ações que contém os botões *\\
export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

//* Criando os botões da nossa barra de ações *\\
export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

//* Podemos criar estilos com elementos já criados anteriormente
//* ou seja, desse modo conseguimos herdar os estilos aplicados no elemento pai
//* facilitando na hora de usar modificadores, para fazer isso basta chamar o styled como
//* função e colocar como argumento o elemento que terá seus estilos herdados.
export const SaveBtn = styled(Button)`
  background-color: ${variaveis.verde};
`

export const DeleteBtn = styled(Button)`
  background-color: ${variaveis.vermelho};
`

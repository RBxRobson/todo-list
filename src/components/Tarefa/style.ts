import styled from 'styled-components'

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
//* Criando as tags do nosso Card *\\
export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: #e1a32a;
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

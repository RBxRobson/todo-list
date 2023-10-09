import styled from 'styled-components'

import { Props } from '.'

//* Usando o Omit para remover as tipagens contador e legenda *\\
type PropsSemLEgendaEContador = Omit<Props, 'contador' | 'legenda'>

//* Passando a props para a div pai *\\
export const Card = styled.div<PropsSemLEgendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '#1e90ff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  display: block;
  font-size: 14px;
`

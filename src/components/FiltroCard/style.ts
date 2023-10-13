import styled from 'styled-components'

//* Podemos usar o Omit para omitir tipagens *\\
//? import { Props } from '.'
//? type PropsSemLEgendaEContador = Omit<Props, 'contador' | 'legenda' | 'criterio'>

type Props = {
  active: boolean
}

//* Passando a props para a div pai *\\
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.active ? '##fff' : '#fcfcfc')};
  color: ${(props) => (props.active ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
  cursor: pointer;
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

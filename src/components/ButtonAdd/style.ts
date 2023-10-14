import { Link } from 'react-router-dom'
import styled from 'styled-components'

//* Importamos o componente Link do Router Dom e estilizamos *\\
export const CircularBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
`

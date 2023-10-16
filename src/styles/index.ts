import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../components/Tarefa/style'

const EstiloGLobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 18px;
  margin: 40px 0;
`

export const Campo = styled.input`
  border-radius: 8px;
  font-weight: bold;
  padding: 8px;
  background-color: #fff;
  color: #666666;
  border: 2px solid #666666;
  width: 100%;
`

export const SaveBtn = styled(Button)`
  background-color: ${variaveis.verde};
`

export default EstiloGLobal

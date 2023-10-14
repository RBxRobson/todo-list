import { CircularBtn } from './style'

const ButtonAdd = () => {
  //* Usamos o to no lugar do href, pois estamos usando um componente react do router DOM
  //* após isso basta passar o caminho
  return <CircularBtn to="/cadastro">+</CircularBtn>
}

export default ButtonAdd

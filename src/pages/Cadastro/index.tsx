import Formulario from '../../containers/Formulario'
import SideBar from '../../containers/SideBar'

const Cadastro = () => {
  return (
    <>
      <SideBar mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro

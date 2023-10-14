import ButtonAdd from '../../components/ButtonAdd'
import SideBar from '../../containers/SideBar'
import TodoList from '../../containers/TodoList'

const Home = () => {
  return (
    <>
      <SideBar />
      <TodoList />
      <ButtonAdd />
    </>
  )
}

export default Home

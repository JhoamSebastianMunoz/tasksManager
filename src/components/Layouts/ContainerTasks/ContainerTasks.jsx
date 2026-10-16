import PropTypes from 'prop-types'
import '../ContainerTasks/ContainerTasks.css'

export const ContainerTasks = ({ children }) => {
  return (
    <ul className='container-tasks' role='list' aria-label='Lista de tareas'>
      {children}
    </ul>
  )
}

ContainerTasks.propTypes = {
  children: PropTypes.node.isRequired
}
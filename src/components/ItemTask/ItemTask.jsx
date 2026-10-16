import PropTypes from 'prop-types'
import { useContext } from 'react'
import { taskContext } from '../Context/Context'
import '../ItemTask/ItemTask.css'

export const ItemTask = ({ idTask, content, titleTask }) => {
  const { tasks, updateTaskStatus } = useContext(taskContext)

  const task = tasks.find(task => task.id === idTask)

  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status)
  }

  const isCompleted = task?.status

  return (
    <li
      id={idTask}
      className={`item-task ${isCompleted ? 'item-task--completed' : ''}`}
    >
      <div className='item-task__content'>
        <h2 className='item-task__title'>{titleTask}</h2>
        {content && (
          <p className='item-task__description'>{content}</p>
        )}
      </div>
      <input
        type='checkbox'
        className='item-task__checkbox'
        checked={isCompleted}
        onChange={handleCheckboxChange}
        aria-label={isCompleted ? `Marcar "${titleTask}" como pendiente` : `Marcar "${titleTask}" como terminada`}
      />
    </li>
  )
}

ItemTask.propTypes = {
  idTask: PropTypes.string.isRequired,
  content: PropTypes.string,
  titleTask: PropTypes.string.isRequired
}
import { useContext } from 'react'
import { taskContext } from '../Context/Context'
import '../FilterTasks/FilterTasks.css'

export const FilterTasks = () => {
  const context = useContext(taskContext)

  const handleFilters = (event) => {
    const currentOption = event.target.value
    if (currentOption === 'pendientes') {
      context.setFilteredTasks(context.tasks.filter(task => task.status === false))
    } else if (currentOption === 'realizadas') {
      context.setFilteredTasks(context.tasks.filter(task => task.status === true))
    } else {
      context.setFilteredTasks(context.tasks)
    }
  }

  return (
    <div className='filter-tasks' role='search' aria-label='Filtrar tareas'>
      <label htmlFor='filter-select' className='filter-tasks__label'>
        Filtrar
      </label>
      <select
        id='filter-select'
        className='filter-tasks__select'
        onChange={handleFilters}
        defaultValue='Todas'
      >
        <option value='Todas' className='filter-tasks__option'>Todas</option>
        <option value='pendientes' className='filter-tasks__option'>Pendientes</option>
        <option value='realizadas' className='filter-tasks__option'>Terminadas</option>
      </select>
    </div>
  )
}
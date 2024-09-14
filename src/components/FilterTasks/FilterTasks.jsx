import {useContext} from 'react'
import { taskContext } from '../Context/Context'
import '../FilterTasks/FilterTasks.css'


export const FilterTasks = () => {

  const context = useContext(taskContext)

  const handleFilters =(event)=>{
    let currentOption = event.target.value
    if(currentOption === 'pendientes'){
      context.setFilteredTasks(context.tasks.filter(tasks => tasks.status === false))
    }else if (currentOption === 'realizadas'){
      context.setFilteredTasks(context.tasks.filter(tasks => tasks.status === true))
    }else{
      context.setFilteredTasks(context.tasks)
    }
  }
  return (
    <div className='container-filters' >
      <label >Filtrar por: </label>
      <select name="" id="" onChange={handleFilters} >
        <option value="Todas" className='opt opt1' >Todas</option>
        <option value="pendientes" className='opt opt2' >Pendientes</option>
        <option value="realizadas" className='opt opt3' >Completados</option>
      </select>
      
    </div>
  )
}



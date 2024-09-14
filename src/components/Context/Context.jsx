import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const taskContext = createContext()
const tsk=[
]

export const TasksProvider = ({children}) =>{

    const[tasks,setTasks] =useState(tsk)
    const [filteredTasks, setFilteredTasks]= useState(tsk)
    const [pendingTasks, setPendingTasks] = useState(0)
    const [doneTasks, setDoneTasks]= useState(0)

    // función para actualizar el estado de una tarea
    const updateTaskStatus =(taskId, newStatus) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? {...task, status: newStatus}: task
            )
        );    
    }
    return(
        <taskContext.Provider value={{
            tasks,
            setTasks,
            pendingTasks,
            setPendingTasks,
            doneTasks,
            setDoneTasks,
            updateTaskStatus,
            filteredTasks, 
            setFilteredTasks
            }}>
                {children}
        </taskContext.Provider>
    )

}




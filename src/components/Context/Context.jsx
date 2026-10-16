import PropTypes from 'prop-types'
import { createContext, useState, useMemo, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'

const taskContext = createContext()

export { taskContext }

const initialTasks = []

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks)
  const [filteredTasks, setFilteredTasks] = useState(initialTasks)

  const pendingTasks = useMemo(
    () => tasks.filter(task => task.status === false).length,
    [tasks]
  )

  const doneTasks = useMemo(
    () => tasks.filter(task => task.status === true).length,
    [tasks]
  )

  const updateTaskStatus = useCallback((taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }, [])

  const addTask = useCallback((task) => {
    const newTask = {
      id: uuidv4(),
      ...task,
      status: false
    }
    setTasks(prev => [...prev, newTask])
    setFilteredTasks(prev => [...prev, newTask])
  }, [])

  return (
    <taskContext.Provider value={{
      tasks,
      setTasks,
      pendingTasks,
      doneTasks,
      updateTaskStatus,
      filteredTasks,
      setFilteredTasks,
      addTask
    }}>
      {children}
    </taskContext.Provider>
  )
}

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired
}
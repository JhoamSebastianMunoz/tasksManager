import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext } from '../../Context/Context'
import { NewTask } from '../../NewTask/NewTask'
import { FilterTasks } from '../../FilterTasks/FilterTasks'
export const Home = () => {
  const context = React.useContext(taskContext)

  return (
    <>
      <Header>
        <NewTask />
        <FilterTasks />
      </Header>
      <Main>
        <ContainerTasks>
          {context.filteredTasks.map(task => (
            <ItemTask
              key={task.id}
              idTask={task.id}
              content={task.description}
              titleTask={task.title}
            />
          ))}
        </ContainerTasks>
      </Main>
    </>
  )
}
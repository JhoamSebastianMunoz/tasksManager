import React, { useContext } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import profile from '../../../assets/pngtree-man-wearing-headphones-and-on-the-side-is-a-purple-background-picture-image_3538867.jpg'
import { ContainerTasks } from '../../Layouts/ContainerTasks/ContainerTasks'
import { ItemTask } from '../../ItemTask/ItemTask'
import { taskContext} from '../../Context/Context'
import { NewTask } from '../../NewTask/NewTask'
import { InfoTasks } from '../../Layouts/InfoTasks/InfoTasks'
import {FilterTasks} from '../../FilterTasks/FilterTasks'
import '../Home/Home.css'

export const Home = () => {
    const context = useContext(taskContext)
    return (
    <>
        <Header>
            <div className='container-header-1' >
                <div className='container-title' >
                    <h1 className='title-header' >Gestor de Tareas</h1>
                </div>
                <div className='container-img' >
                    <img className='img-profile' src={profile} alt='Imagen de perfil' ></img>
                </div>
            </div>
        <NewTask/>
        <InfoTasks/>
        <FilterTasks/>
        </Header>
        <Main>
            <ContainerTasks>
                {
                    context.filteredTasks.map(task => <ItemTask key={task.id} idTask={task.id} content={task.description} titleTask={task.title} />)
                }
            </ContainerTasks>
        </Main>
    </>
    )
}



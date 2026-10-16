import { useContext, useRef, useState } from 'react'
import { taskContext } from '../Context/Context'
import '../NewTask/NewTask.css'

export const NewTask = () => {
  const { addTask } = useContext(taskContext)

  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const txtTitle = useRef(null)
  const txtDescription = useRef(null)

  const handleTitleTask = (event) => setTitleTask(event.target.value)
  const handleDescriptionTask = (event) => setDescriptionTask(event.target.value)

  const handleCreateTask = (event) => {
    event.preventDefault()
    if (!titleTask.trim()) {
      txtTitle.current?.focus()
      return
    }

    addTask({
      title: titleTask.trim(),
      description: descriptionTask.trim()
    })

    setTitleTask('')
    setDescriptionTask('')
    txtTitle.current?.focus()
  }

  return (
    <form className='frm-task' onSubmit={handleCreateTask}>
      <fieldset className='frm-task__fieldset'>
        <label htmlFor='txt-title' className='frm-task__label'>
          Título
        </label>
        <input
          ref={txtTitle}
          id='txt-title'
          className='frm-task__input'
          type='text'
          placeholder='Ej: Revisar pull request'
          value={titleTask}
          onChange={handleTitleTask}
          maxLength={80}
          autoComplete='off'
          required
        />
      </fieldset>

      <fieldset className='frm-task__fieldset'>
        <label htmlFor='txt-description' className='frm-task__label'>
          Descripción
        </label>
        <input
          ref={txtDescription}
          id='txt-description'
          className='frm-task__input'
          type='text'
          placeholder='Ej: Revisar cambios en el módulo de autenticación'
          value={descriptionTask}
          onChange={handleDescriptionTask}
          maxLength={200}
          autoComplete='off'
        />
      </fieldset>

      <div className='frm-task__actions'>
        <button type='submit' className='btn-new-task' disabled={!titleTask.trim()}>
          Crear tarea
        </button>
      </div>
    </form>
  )
}
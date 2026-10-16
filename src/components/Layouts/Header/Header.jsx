import PropTypes from 'prop-types'
import { useContext } from 'react'
import { taskContext } from '../../Context/Context'
import '../Header/Header.css'

export const Header = ({ children }) => {
  const context = useContext(taskContext)

  return (
    <header className='header-app'>
      <div className='header-content'>
        <h1 className='page-title'>Bitácora</h1>
        <div className='header-counts' aria-live='polite' aria-atomic='true'>
          <span className='count-item'>
            <span className='count-value count-value--pending'>{context.pendingTasks}</span>
            <span>pendientes</span>
          </span>
          <span className='count-item'>
            <span className='count-value count-value--done'>{context.doneTasks}</span>
            <span>terminadas</span>
          </span>
        </div>
      </div>
      {children}
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}
import PropTypes from 'prop-types'
import '../Main/Main.css'

export const Main = ({ children }) => {
  return (
    <main className='main-container'>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired
}
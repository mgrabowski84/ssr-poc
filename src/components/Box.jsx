import React from 'react'
import PropTypes from 'prop-types'

const Box = ({ children, color }) => (
  <div
    style={{ backgroundColor: color, height: '100vh', width: '100vw' }}
  >
    {children}
  </div>
)

Box.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
}

Box.defaultProps = {
  color: 'red',
}

export default Box

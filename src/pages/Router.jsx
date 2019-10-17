import React from 'react'
import { Router } from '@reach/router'

import Box from '../components/Box'

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Box path="/" color="pink" />
        <Box path="/blue" color="blue" />
      </Router>
    )
  }
}

export default RouterComponent

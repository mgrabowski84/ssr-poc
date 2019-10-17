import React from 'react'

import ReactLogo from './components/ReactLogo'

// import Component from './pages/JustBox'
// import Component from './pages/SSRBroken'
// import Component from './pages/Router'
import Component from './pages/AdFirst'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state
    return (
      <React.Fragment>
        <Component />
        {loaded && <ReactLogo />}
      </React.Fragment>
    )
  }
}

export default App

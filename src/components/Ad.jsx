import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  backgroundColor: 'red',
  height: '200px',
  width: '300px',
  color: 'white',
  fontSize: '64px',
  lineHeight: '200px',
  textAlign: 'center',
}

class Ad extends React.Component {
  componentDidMount() {
    if (this.props.load) {
      window.loadAd()
    }
  }

  render() {
    const { id } = this.props
    return (
      <div id={id} style={styles} />
    )
  }
}

Ad.propTypes = {
  id: PropTypes.string.isRequired,
  load: PropTypes.bool,
}

Ad.defaultProps = {
  load: false,
}

export default Ad

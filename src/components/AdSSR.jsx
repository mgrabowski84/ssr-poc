import React from 'react'

import Ad from './Ad'

const AdSSR = (id, ...props) => {
  return (
    <Ad id={id} {...props} />
  )
}

AdSSR.propTypes = Ad.propTypes

export default AdSSR

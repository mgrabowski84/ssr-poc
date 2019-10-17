import React from 'react'

import Box from '../components/Box'

const SSRBroken = () => {
  if (typeof document === 'undefined') {
    return (
      <Box color="red" />
    )
  }
  return (
    <Box color="green" />
  )
}

export default SSRBroken

/*
React 16 doesn't guarantee that the result will be correct if there is a mismatch. It inserts extra nodes but doesn't patch up the attributes because it would be pretty expensive and negate the performance benefits.

https://github.com/facebook/react/issues/11104
*/

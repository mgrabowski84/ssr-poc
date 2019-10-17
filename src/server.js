import React from 'react'

import { renderToString } from 'react-dom/server'
// import { ServerLocation } from '@reach/router'

import App from './App'

export const render = () => {
  return renderToString(<App />)
}

// export const render = req => {
//   return renderToString(
//     <ServerLocation url={req.url}>
//       <App />
//     </ServerLocation>
//   )
// }

export default render

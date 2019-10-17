import express from 'express'
import path from 'path'

import { render } from '../src/server'

import createTemplate from './template'

const app = express()

console.log('Running server at 3000')

app.use('/static', express.static(path.resolve(__dirname, '../build')))

app.get('/client', (_, res) => {
  res.send(createTemplate({ content: '' }))
})

app.get('*', (_, res) => {
  res.send(createTemplate({ content: render() }))
})

app.listen(3000)

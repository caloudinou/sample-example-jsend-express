'use strict'

const express = require('express')
const example = express.Router()

class InvalidFields extends Error {
  constructor (fields) {
    super('invalid fields')
    this.errors = fields || []
  }
}

example.get('/success', (req, res, next) => {
  const data = {
    example: 'test example'
  }
  res.success({ data })
})

example.get('/partial', (req, res, next) => {
  const payload = {paginationCount: 2, paginationPage: 1, paginationLimit: 20}
  const data = {
    example: 'test example'
  }
  res.partial({ payload, data })
})

example.get('/fail', (req, res, next) => {
  const error = new InvalidFields([
    { key: 'inputA', value: 'is required'},
    { key: 'inputB', value: 'is required'}
  ])
  res.fail({ error })
})

example.get('/error', (req, res, next) => {
  const error = new Error('error server foo')
  res.error({ error })
})

module.exports = example

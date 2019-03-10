const PORT = 1616

const express = require('express')

const { JSend } = require('jsend-express')

const { version, name } = require('./package')

const routeExample = require('./routes/example')

/**
 * init Lib
 * @type {JSend}
 */
const jSend = new JSend({ name, version, release: process.env.COMMIT || '42' })

const app = express()

/**
 * use middleware JSend to extend express
 */
app.use(jSend.middleware.bind(jSend))

app.use('/example', routeExample)

app.listen(PORT, error => {
  console.log({ PORT }, error || 'OK')
})

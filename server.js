const express = require('express')
const next = require('next')
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = routes.getRequestHandler(app)



app.prepare()
    .then(() => {
        const server = express()

        server.get('*', (req, res) => {
            console.log('Respondiendo a las peticiones')
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('Servidor listo en puerto 3000')
        })


    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
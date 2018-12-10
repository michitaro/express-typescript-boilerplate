import { Express } from "express";


export function setup(app: Express) {
    // logging
    const logger = require('morgan')
    app.use(logger('dev'))

    // log post parameters
    app.use((req, res, next) => {
        console.log(`params: ${JSON.stringify(req.body)}`)
        next()
    })
}
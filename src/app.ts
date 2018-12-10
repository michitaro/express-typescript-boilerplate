import * as express from "express";
import * as devel from './devel'

const app = express()

// static assets
app.use('/sso', express.static(`${__dirname}/../public`))

// accept json requests
app.use(express.json())

// devel
if (process.env.NODE_ENV == 'development') {
    devel.setup(app)
}

app.get('/', (req, res) => {
    res.send('hello world')
})

export { app }
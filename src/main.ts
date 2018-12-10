import { app } from "./app";

const server = app.listen(8000, () => {
    console.log('server start')
})

process.on('unhandledRejection', err => {
    console.error(err)
    server.close()
    process.exit(1)
})
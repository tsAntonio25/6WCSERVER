import express from 'express'
const __dirname = import.meta.dirname

const app = express()
app.use(express.static('public'))

const server = app.listen(3000, () => {
    const host = '';
    const port = ''

    console.log()
})
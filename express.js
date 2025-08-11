import express from 'express'
const __dirname = import.meta.dirname

const app = express()

// app.use(express.static())

// routing
// home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/home.html')
})

// student page
app.get('/studentForm', (req, res) => {
    res.sendFile(__dirname + '/pages/student.html')
})

// admin page
app.get('/adminForm', (req, res) => {
    res.sendFile(__dirname + '/pages/admin.html')
})

// get inputs
// student
app.get('/getStudent', (req, res) => {
    let response = {
        studentID: req.query.studentID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        section: req.query.section
    }

    console.log("Response is: ", response)
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

// admin
app.get('/getAdmin', (req, res) => {
    let response = {
        adminID: req.query.adminID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        department: req.query.department
    }

    console.log("Response is: ", response)
    res.end(`Received Data: ${JSON.stringify(response)}`)
})

// create server
const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`Server running at http://${host}:${port}`)
})
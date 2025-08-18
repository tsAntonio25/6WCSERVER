import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import bodyparser from 'body-parser'
import multer from 'multer'

// const __dirname = import.meta.dirname

const app = express()
const urlEncodedParser = bodyparser.urlencoded({extended: false})

// storage object
const storage = multer.diskStorage ({
    destination: (req, file, callback ) => {
    callback(null, 'uploads/');
    },
    filename: (req, file, callback ) => {
    callback(null, file.originalname);
    }
})

const upload = multer({storage: storage}).fields([{name: 'file', maexCount: 1}])



// app.use(express.static())

// routing
// home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/home.html'))
})

app.get('/uploadForm', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/uploadForm.html'))
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
app.post('/postAdmin', (req, res) => {
    
    upload(req, res, (err) => {

        if (err) return res.statusCode(404).end('Error uploading file')

        let response = {
            adminId: req.body.adminId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            uploadedFile: req.files['file'][0]
        }

        // check
        console.log(`Received Data: ${JSON.stringify(response)}`)
        res.end('File and form data uploaded successfully!')
        })
    
})


// create server
const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`Server running at http://${host}:${port}`)
})
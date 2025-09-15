import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import bodyparser from 'body-parser'
import multer from 'multer'
import cors from 'cors'

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

const upload = multer({storage: storage}).fields([{name: 'file', maxCount: 1}])

// cors
app.use(cors())


// get inputs
// student form using GET 
app.get('/getStudent', (req, res) => {
    const { studentID, firstName, lastName, section } = req.query;
    let response = { studentID, firstName, lastName, section };

    console.log("Student data received:", studentID, firstName, lastName, section);
    res.json({
    message: "Student data received successfully!",
    student: { studentID, firstName, lastName, section },
  });
})

// admin form using POST
app.post('/postAdmin', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file', details: err.message });
    }

    let response = {
      adminId: req.body.adminId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      uploadedFile: req.files && req.files.file ? req.files.file[0].originalname : null
    };

    console.log(`Admin data received: ${JSON.stringify(response)}`);
    res.json(response); 
  });
});


// create server
const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`Server running at http://${host}:${port}`)
})
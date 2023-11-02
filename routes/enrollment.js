const express = require("express")
const connection = require("../connection")
const router = express.Router()

var auth = require("../Authentication/authentication")


router.post('/enroll', auth.authenticateToken, (req, res) => {
    const { studentId, courseId } = req.body;
    const sql = 'INSERT INTO enrollments (student_id, course_id) VALUES (?, ?)';
    const values = [studentId, courseId];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error enrolling in the course: ' + err.message);
        res.status(500).json({ error: `'Failed to enroll in the course'` });
      } else {
        res.status(200).json({ message: 'Enrolled in the course successfully' });
      }
    });
});

router.get("/get", auth.authenticateToken, (req, res) =>{
  
    connection.query('SELECT * FROM user', (err, results) => {
      if (err) {
        
        res.status(500).json({ error: 'An error occurred' });
      } else {
        res.status(200).json(results);
      }
    });
})

module.exports = router
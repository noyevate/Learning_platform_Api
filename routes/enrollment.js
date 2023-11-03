const express = require("express")
const connection = require("../connection")
const router = express.Router()

var auth = require("../Authentication/authentication")


router.post('/enroll', auth.authenticateToken, (req, res) => {
    let course_enrollment = req.body;
    const sql = 'INSERT INTO enrollment (name, email, course, learning_platformId) VALUES (?, ?, ?, ?)';
    connection.query(sql, [course_enrollment.name, course_enrollment.email, course_enrollment.course, course_enrollment.learning_platformId], (err, result) => {
      if (err) {
        console.error('Error enrolling in the course: ' + err.message);
        res.status(500).json({ error: `'Failed to enroll in the course'` });
      } else {
        res.status(200).json({ message: 'Enrolled in the course successfully' });
      }
    });
});


module.exports = router
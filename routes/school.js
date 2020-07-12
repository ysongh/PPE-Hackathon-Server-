const express = require('express');
const router = express.Router();

const School = require('../models/School');

// POST /api/school
// create a new school
router.post('/', async (req, res) => {
    try{
        const newSchool = {
            name: req.body.name,
            address: req.body.address,
            numberOfStudents: req.body.numberOfStudents,
            gradeLevel: req.body.gradeLevel,
            description: req.body.description
        };

        const dataSchool = await School.create(newSchool);

        return res.status(201).json({ data: dataSchool });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;
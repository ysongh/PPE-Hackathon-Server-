const express = require('express');
const router = express.Router();

const School = require('../models/School');

// GET /api/school
// find all schools
router.get('/', async (req, res) => {
    try{
        const schools = await School.find();

        return res.status(200).json({
            data: schools,
            count: schools.length
        });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;

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

// GET /api/school/:id
// find all schools
router.get('/:id', async (req, res) => {
    try{
        const school = await School.findById(req.params.id);

        return res.status(200).json({
            data: school
        });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;
const express = require('express')
const router = express.Router()
const Employees = require('../models/employeeModel')

router.get('/', (req, res) => {
    Employees.find({}, (err, Employees) => {
        res.json(Employees)
    })
})
router.use('/:id', (req, res, next) => {
    Employees.findById(req.params.id, (err, employee) => {
        if(err)
            res.status(500).send(err)
        else
            req.employee = employee
            next()
    })
})
router
    .get('/:id', (req, res) => {
        return res.json( req.employee )
    })
    .put('/:id', (req, res) =>{

        Object.keys(req.body).map(key=>{
            req.employee[key] = req.body[key]
        })
        req.employee.save()
        res.json(req.employee)
    })
module.exports = router


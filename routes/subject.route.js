const express = require('express')
const router = express.Router()
const { ObjectId } = require('bson')
const subjectSchema = require('../models/subject.model')

router.post('/', async (req, res) => {
  try {
    const body = req.body
    const subject = new subjectSchema({
      name: body.name,
      lessons: body.lessons,
    })

    await subject.save()

    res.send({
      success: true,
      message: 'subject saves successfully',
    })
  } catch (e) {
    res.status(400).json({
      success: false,
      message: 'Invalid Inputs',
    })
  }
})

module.exports = router

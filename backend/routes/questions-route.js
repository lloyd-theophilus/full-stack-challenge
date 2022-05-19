//Import express
const express = require('express')

//Import questions-controller
const questionsController = require('./../controllers/questions-controller')

//Create a router
const router = express.Router()

//Add route for get all questions
router.get('/', questionsController.getAllQuestions)

//Add route for post a question
router.post('/', questionsController.postQuestion)

//Add route for post an answer
router.post('/answer', questionsController.postAnswer)

//Export router
module.exports = router
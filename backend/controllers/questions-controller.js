//Import database
const knex = require('./../db')

exports.getAllQuestions = async (req, res) => { 
    try {
        const questions = await knex.select('*').from('questions')
        res.send(questions)
    } catch (error) {
        console.log(error)
    }
}

exports.postQuestion = async (req, res) => { 
    try {
        const { question, answer, auther } = req.body
        const newQuestion = await knex('questions').insert({
            question,
            answer,
            auther
        })
        res.send(newQuestion)
    } catch (error) {
        console.log(error)
    }
}

exports.postAnswer = async (req, res) => { 
    try {
        const { answer, auther } = req.body
        const newAnswer = await knex('questions').insert({
            answer,
            auther
        })
        res.send(newAnswer)
    } catch (error) {
        console.log(error)
    }
}
const express = require('express')
const router = express.Router()
const mentors = require('../usecases/mentors')

router.get('/', async (request, response) => {
    try{
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all mentors',
            data: {
                error: error.message
            }
        })
    }
})

router.post('/', async (request, response)=>{
    try{
        const {name, lastname, age, gender, modulo} = request.body

        const mentorCreated = await mentors.create(name, lastname, age, gender,modulo)

        response.json({
            success: true,
            message: 'Created Mentor',
            data:{
                mentor: mentorCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at post mentor',
            data: {
                error: error.message
            }
        })
    }
})

router.delete('/:id', async (request, response)=>{
    try{
        const {id} = request.params
        const mentorDeleted = await mentors.deleteById(id)

        response.json({
            success: true,
            message: 'Deleted Mentor',
            data:{
                mentor: mentorDeleted
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete mentor',
            data: {
                error: error.message
            }
        })
    }
})

router.patch('/:id', async(request, response)=>{
    try{
        const {id} = request.params
        const mentorUpdated = await mentors.updateById(id, request.body)
        response.json({
            success: true,
            message: 'Mentor updated',
            data:{
                mentor: mentorUpdated
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at mentor update',
            data: {
                error: error.message
            }
        })
    }
})

module.exports = router
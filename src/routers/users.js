const express = require('express')
const users = require('../usecases/users')
const router = express.Router()

router.post('/', async (request, response) => {
    try{
        const newUser = await users.signUp(request.body)
        response.json({
            success: true, 
            message: 'User registered',
            data: {
                user: newUser
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Could not register',
            error: error.message
        })
    }
})

router.get('/', async (require, response)=>{
    try{
const allUsers = await users.getAll()
response.json({
    success: true, 
            message: 'All users',
            data: {
                users: allUsers
            }
})
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get users',
            error: error.message
        })
    }
})

module.exports = router
const express = require('express')

const authMiddlewares = require('../middlewares/auth')
const router = express.Router()
const koders = require('../usecases/koders')

//router.use(auth)

router.get('/', authMiddlewares.auth, async (request, response) => {
    try{
        const allKoders = await koders.getAll()
        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            data: {
                error: error.message
            }
        })
    }
})

router.post('/',authMiddlewares.authRoles(['admin']), async (request, response)=>{
    try{
        const {name, lastName, age, gender} = request.body

        const koderCreated = await koders.createKoder(name, lastName, age, gender)

        response.json({
            success: true,
            message: 'Created Koder',
            data:{
                koder: koderCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at post koder',
            data: {
                error: error.message
            }
        })
    }
})

router.delete('/:id', async (request, response)=>{
    try{
        const {id} = request.params
        const koderDeleted = await koders.deleteKoder(id)

        response.json({
            success: true,
            message: 'Deleted Koder',
            data:{
                koder: koderDeleted
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete koder',
            data: {
                error: error.message
            }
        })
    }
})

router.patch('/:id', async(request, response)=>{
    try{
        const {id} = request.params
        const koderUpdated = await koders.updateById(id, request.body)
        response.json({
            success: true,
            message: 'Koder updated',
            data:{
                koder: koderUpdated
            }
        })

    }catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at koder update',
            data: {
                error: error.message
            }
        })
    }
})

module.exports = router

/*
Practica:
  GET /mentores
  POST /mentores
  DELETE /mentores/:id
  PATCH /mentores/:id
  Mentors
  - name
  - lastName
  - age
  - gender
  - modulo [ 'front', 'back', 'cloud', 'react' ]
*/
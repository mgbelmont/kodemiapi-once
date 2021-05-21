const express = require('express')
const router = express.Router()
const koders = require('../usecases/koders')

router.delete('/:id', async (request, response)=>{
    try{
        await koders.deleteKoder(request.params.id)

        response.json({
            success: true,
            message: 'Deleted Koder',
            data:{}
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

router.get('/', async (request, response) => {
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

router.post('/', async (request, response)=>{
    try{
        const {name, lastName, age, gender} = request.body

        await koders.createKoder(name, lastName, age, gender)

        response.json({
            success: true,
            message: 'Created Koder',
            data:{}
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


module.exports = router
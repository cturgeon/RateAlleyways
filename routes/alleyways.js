const express = require('express');
const router = express.Router();
const Alleyways = require('../models/Alleyways')


// returns every alleyway
router.get('/', async (req, res) => {
    try{
        const posts = await Alleyways.find()
        res.json(posts) 
    }catch(err) {
        res.json({message: err})
    }
})

// gets a specific alleyway
router.get('/:id', async (req, res) => {
    try{
        const post = await Alleyways.findById(req.params.id)
        res.json(post)
    }catch(err) {
        res.json({message: err})
    }
})

// posts a new alleyway
router.post('/', async (req, res) => {
    const post = new Alleyways({
        name: req.body.name,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        rating: req.body.rating,
        review: req.body.review,
        image: req.body.image
    })
    try{
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(err) {
        res.json({message: err})
    }
})

// updates an alleyway review (description)
router.put('/:id', async (req, res) => {
    try{
        const post = await Alleyways.updateOne({_id: req.params.id}, {$set : {review: req.body.review}})
        res.json(post)
    }catch(err) {
        res.json({message: err})
    }
})

// deletes an alleyway
router.delete('/:id', async (req, res) => {
    try{
        const post = await Alleyways.remove({_id: req.params.id})
        res.json(post)
    }catch(err) {
        res.json({message: err})
    }
})

module.exports = router
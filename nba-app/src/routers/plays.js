const express = require('express')
const Play = require('../models/plays')
const router = new express.Router()

router.post('/plays', async (req, res) => {
    const play = new Play(req.body)
    try {
        await play.save()
        res.status(201).send(play)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/plays',  async (req, res) => {
    try {
        const plays = await Play.find({})
        res.status(200).send(play)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/plays/:id', async (req, res) => {
    const _id = req.params.id

    try{
        const play = await Play.findById(req.params.id)

        updates.forEach((updates) = req.body[update])
        await play.save()

        if (!play) {
            return res.status(404).send()
        }
        res.status(200).send(play)
    } catch(e) {
        res.status(500).send(e)
    }
})


router.patch('/plays/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completion']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates.'})
    }

    try {
        const play = await Play.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

        if (!play) {
            return res.status(404).send()
        }

        res.send(play)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/plays/:id', async (req, res) => {
    try {
        const play = await Play.findByIdAndDelete(req.params.id)

        if (!play) {
            res.status(404).send()
        }
        res.send(play)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;
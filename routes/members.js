const express = require('express')
const router = express.Router()
const Member = require('../models/member')

//getting all
router.get('/', async (req, res) => {
   try {
       const members = await Member.find()
       res.json(members)
   } catch (err) {
     res.status(500).json({ message: err.message })
   }
    
})

//getting one
router.get('/', getMember, (req, res) => {
   res.send(req.members.lastName)
})

//creating one
router.post('/register', async (req, res) => {
   const member = new Member({
       name: req.body.name,
       lastName: req.body.lastName,
       emailAddress: req.body.emailAddress,
       phoneNumber: req.body.phoneNumber,
       dateOfBirth: req.body.dateOfBirth,
       address: req.body.address,
       acceptedTerms: req.body.acceptedTerms,
       guardianName: req.body.guardianName,
       guardianLastName: req.body.guardianLastName,
       guardianPhoneNumber: req.body.guardianPhoneNumber,
       subscribedToNewsletter: req.body.subscribedToNewsletter,
       memberImage: req.body.memberImage
   }) 
   try {
    const newMembers = await member.save()
    res.status(201).json(newMembers)
   } catch (err) {
       res.status(400).json({ message: err.message })
   }
})

//updating one
router.patch('/:id', getMember, async (req, res) => {
   if (req.body.name != null) {
       res.member.name = req.body.name

   }
   if (req.body.lastName != null) {
       res.member.lastName = req.body.lastName
   }
   try {
        const updatedMember = await res.member.save()
        res.json(updatedMember)
   } catch (err) {
        res.json({ message: err.message })
   }
})

//deleting one
router.delete('/:id', getMember, async (req, res) => {
   try {
       await res.member.remove()
       res.json({ message: 'Deleted Member' })
   } catch (err) {
        res.status(500).json({ message: err.message })
   }
})

async function getMember (req, res, next) {
    let member
    try {
        member = await Member.findById(req.params.id)
        if (member == null) {
            return res.status(404)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })

    }

    res.member = member
    next()
}

module.exports = router
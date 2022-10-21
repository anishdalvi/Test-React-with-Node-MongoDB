const router = require('express').Router();
let User = require('../models/user.model')
//const bodyParser = require("body-parser")



router.route('/').get((req,res) => {
    User.find()
     .then(users => res.json(users))
     .catch(err => res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = Number(req.body.phone)
    const newUser = new User({
        name,
        email,
        phone 
    })

    newUser.save()
     .then(() => res.json('User Added'))
     .catch(err => res.status(400).json('Error:'+err))

})

module.exports = router
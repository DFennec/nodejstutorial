const express = require('express')
const peopleController = require('../controllers/people')
/* This import could also be done like this:

const {getPeople,
createPerson,
createPersonPostman,
updatePerson,
deletePerson}= require('../controllers/people')

then the functions wouldn't have the peopleController part

const router = express.Router()

let {people} = require('../data')

router.get('/',getPeople)

router.post('/',createPerson)

router.post('/postman',createPersonPostman)

router.put("/:id",updatePerson)

router.delete('/:id',deletePerson)
*/

const router = express.Router()

let {people} = require('../data')

router.get('/',peopleController.getPeople)

router.post('/',peopleController.createPerson)

router.post('/postman',peopleController.createPersonPostman)

router.put("/:id",peopleController.updatePerson)

router.delete('/:id',peopleController.deletePerson)

module.exports=router
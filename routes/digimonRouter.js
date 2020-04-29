const router = require('express').Router()
const digimonController = require('../controllers/digimonController')

router.get('/', digimonController.findAll)
router.post('/',digimonController.create)


module.exports = router
const router = require('express').Router()
const userRouter = require('./userRouter')
const digimonRouter = require('./digimonRouter')
const { authentication } = require('../middlewares/authentication')

router.get('/',(req,res,next)=>{
    res.json({message:'welcome to app'})
})

router.use('/users',userRouter)

router.use(authentication)
router.use('/digimons',digimonRouter)



module.exports = router
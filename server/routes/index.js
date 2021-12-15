const Router = require('express')
const router = new Router
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const colorRouter = require('./colorRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)
router.use('/color', colorRouter)

module.exports = router
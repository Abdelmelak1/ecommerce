const express = require('express')

const productController = require('../controllers/product_controller')

const upload = require('../middlewares/upload')

const route = express.Router()

route.get('/search', productController.search)
route.post('/addimage/:id', upload.array('images'), productController.addProductImage)
route.delete('/imagebyImageId', productController.deleteProductImageById)
route.post('/', upload.array('images'), productController.create)
route.delete('/:id', productController.deleteProduct)
route.delete('/', productController.deleteAll)
route.get('/', productController.getProducts)
route.get('/min', productController.minprice)
route.get('/max', productController.maxprice)
route.get('/:id', productController.getById)

module.exports = route
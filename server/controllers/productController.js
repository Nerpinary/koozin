const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req, res, next) {
        try {
            const {name, price, typeId, colorId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.webp'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, typeId, colorId, img: fileName})

            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const{typeId, colorId} = req.query
        let products;
        if (!typeId && !colorId) {
            products = await Product.findAll()
        }
        if (typeId && !colorId) {
            products = await Product.findAll({where: {typeId}})
        }
        if (!typeId && colorId) {
            products = await Product.findAll({where: {colorId}})
        }
        if (typeId && colorId) {
            products = await Product.findAll({where: {colorId, typeId}})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {id} = req.params
        const product = await Product.findOne(
            {where: {id}}
        )
        return res.json(product)
    }

    async deleteOne(req, res) {
        const {id} = req.params
        const product = await Product.destroy(
            {where: {id}}
        )
        return res.json({message: 'Успешно удалено!'})
    }
}

module.exports = new ProductController()
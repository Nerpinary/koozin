import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._colors = []
        this._products = []
        this._selectedType = {}
        this._selectedColor = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setColors(colors) {
        this._colors = colors
    }
    setProducts(products) {
        this._products = products
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedColor(color) {
        this._selectedColor = color
    }

    get types() {
        return this._types
    }
    get colors() {
        return this._colors
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedColor() {
        return this._selectedColor
    }
}
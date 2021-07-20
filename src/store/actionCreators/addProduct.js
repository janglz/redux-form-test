import { ADD_PRODUCT } from '../actions/actionTypes'

export default function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product
    }
}
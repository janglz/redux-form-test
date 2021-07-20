import { DELETE_PRODUCT } from '../actions/actionTypes'

export default function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        id
    }
}
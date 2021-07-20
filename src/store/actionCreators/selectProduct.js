import { SELECT_PRODUCT } from '../actions/actionTypes'

export default function selectProduct(selected) {
    return {
        type: SELECT_PRODUCT,
        selected
    }
}